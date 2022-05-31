import { Account } from "./account";
import { AtmOperationModel } from "./atm.operations.model";
import { InventoryItem } from "./inventory.item";

export class AtmWithdrawalModel extends AtmOperationModel {
    bills: Map<string,number> = new Map();
    coins: Map<string,number> = new Map();
    maxAvailableAmount?: number;

    inventory: Array<InventoryItem> =new Array<InventoryItem>();

    MAX_ALLOWED_COINS:number =50;

    constructor (account: Account, inventory: Array<InventoryItem>) {
        super(account);

        this.inventory = inventory;
    }

    calculateCashReponse(amount: number) {
        let remainingAmount: number =amount;
        remainingAmount = this.populateCashGroups(amount, this.inventory, 'Bill', this.bills );

        console.log(`calculatedCash bills: ${JSON.stringify(this.bills)}`);
        if(remainingAmount>0) {
            remainingAmount = this.populateCashGroups(remainingAmount, this.inventory, 'Coin', this.coins );
            console.log(`calculatedCash coins: ${JSON.stringify(this.coins)}`);
        }
        if(remainingAmount>0) {
            this.maxAvailableAmount=amount-remainingAmount;
        }

        this.inventory = this.inventory.filter(item=> {
            return item.amount != 0;
        })

        this.validateResponseInventorySufficient();
        this.validateResponseCoinsAmount();

    }

    populateCashGroups(amount: number, inventoryBalanceExt: Array<InventoryItem>, type: string,groupAmount: Map<string,number>): number {
        const  inventoryBalanceByType = inventoryBalanceExt.filter(item=> {
            if(item.type == type)
            {
                return true;
            }
        })

        if (inventoryBalanceByType.length==0) {
            return amount;
        }
      
        inventoryBalanceByType.forEach(item => {
            if (amount >= item.value) 
            {
                let groupValue=item.value;
                const optimalCount = Math.floor(amount / item.value);
                let groupCount = Math.min(optimalCount, item.amount);
                item.amount -= groupCount;
                item.isEmpty = item.amount == 0 ? true : false;
                const itemKey = item.value.toString();
                if(groupAmount.has(itemKey)){
                    const existGroupAmount = groupAmount.get(itemKey) ?? 0; 
                    groupAmount.set(itemKey, existGroupAmount + groupCount);
                } else {
                    groupAmount.set(itemKey,groupCount);
                }
                console.log(groupAmount);
                amount=amount-groupValue*groupCount;
            }
        });

        console.log(`remaining amount:${amount}`);
        return amount;
    }


    validateResponseInventorySufficient() {

        if(this.maxAvailableAmount!= undefined)
        {
            this.errors?.push(`Requested amount conflict, maximum available amount is: ${ this.maxAvailableAmount}`);
        }

    }

    validateResponseCoinsAmount() {
        let coinSum=0;
        this.coins.forEach((v)=> {
            coinSum +=v;
        });
       
        if(coinSum > this.MAX_ALLOWED_COINS) {
            this.errors?.push(`Too much coins: ${ coinSum}`); 
        }
    }

    createAtmCashResponse() {
        let mapAsc = new Map([...this.bills].sort().reverse());
        let billsJson=Object.fromEntries(mapAsc);
        let coinsJson= (Object.fromEntries(this.coins));

        let result= {};

        if(this.errors.length>0){
            result = {
                "errorsMessage": this.combineErrors()
            }
        }
        else if (this.maxAvailableAmount!==undefined) {
            result = {
                "maxAvailableAmount": this.maxAvailableAmount
            }
        } else {
            let bills:any=[];
            Array.from(this.bills).forEach((item)=> {
                let itemData:any ={};
                itemData[item[0]]=item[1];
                bills.push(itemData);
            })

            let coins:any=[];
            Array.from(this.coins).forEach((item)=> {
                let itemData:any ={};
                itemData[item[0]]=item[1];
                coins.push(itemData);
            })


            result = {
                "bills": bills,
                "coins": coins
            }
        }


        return result;
    }

    
}