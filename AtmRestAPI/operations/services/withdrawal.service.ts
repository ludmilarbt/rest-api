import express from 'express';
import withdrawalRepo from '../repos/withdrawal.repo';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response';
import {inventoryBalance} from '../../inventory/dto/inventory.cassetes';
import {InventoryItem} from '../../inventory/dto/inventory.item';

class WithdrawalService {
    async withdrawMoney(amount: number) {
        
        const inventoryBalance= await withdrawalRepo.getInventoryBalance();

        console.log(`inventory: ${inventoryBalance}`);

        let atmBillsAndCoins = new AtmCashResponse();
        let remainingAmount: number =amount;
        remainingAmount = this.populateCashGroups(amount, inventoryBalance, 'Bill', atmBillsAndCoins.bills );
        console.log(`calculatedCash bills: ${JSON.stringify(atmBillsAndCoins.bills)}`);
        if(remainingAmount>0) {
            remainingAmount = this.populateCashGroups(remainingAmount, inventoryBalance, 'Coin', atmBillsAndCoins.coins );
            console.log(`calculatedCash coins: ${JSON.stringify(atmBillsAndCoins.coins)}`);
        }
        if(remainingAmount>0) {
            atmBillsAndCoins.maxAvailableAmount=amount-remainingAmount;
        }

        //let billsJson=Object.fromEntries(atmBillsAndCoins.bills);
        //let coinsJson=Object.fromEntries(atmBillsAndCoins.coins);

        //atmBillsAndCoins.bills=atmBillsAndCoins.bills;
        //atmBillsAndCoins.coins=atmBillsAndCoins.coins;

        return (atmBillsAndCoins.formatAtmCashResponse());
        
        //if response is valid send approval
        //return atmCashResponse;
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
                
                
                //const casheGroup=new CashGroup();
                let groupValue=item.value;
                const optimalCount = Math.floor(amount / item.value);
                let groupCount =Math.min(optimalCount, item.amount);
                groupAmount.set(item.value.toString(),groupCount);
                console.log(groupAmount);
                //groupAmount.push(casheGroup);
                //console.log(casheGroup);
                amount=amount-groupValue*groupCount;
            }
        });

        console.log(`remaining amount:${amount}`);
        return amount;
    }
}

export default new WithdrawalService()