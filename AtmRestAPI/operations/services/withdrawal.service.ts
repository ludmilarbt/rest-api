import express from 'express';
import withdrawalDao from '../daos/withdrawal.dao';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response'
import {inventoryBalance} from '../../inventory/dto/inventory.cassetes';
import {InventoryItem} from '../../inventory/dto/inventory.item';
import { CashGroup } from '../../inventory/dto/cash.group';

class WithdrawalService {
    async withdrawMoney(amount: number) {
        const atmCashResponse= await withdrawalDao.withdrawMoney(amount);



        //if response is valid send approval
        return atmCashResponse;
    }

    async listInventoryItems(amount: number) {
        console.log('inventoryBalance' + JSON.stringify(inventoryBalance));

        const inventoryBalanceExt=new Array<InventoryItem>();

        let newItem=new InventoryItem() 
        newItem.type= "Bill";
        newItem.value= 2000;
        newItem.amount= 2;
        newItem.sum= 4000;
        inventoryBalanceExt.push( newItem);
        newItem=new InventoryItem() 
        newItem.type= "Bill";
        newItem.value= 100;
        newItem.amount= 10;
        newItem.sum= 1000;
        inventoryBalanceExt.push( newItem);
        newItem=new InventoryItem() 
        newItem.type= "Bill";
        newItem.value= 5;
        newItem.amount= 3;
        newItem.sum= 15;
        inventoryBalanceExt.push( newItem);


        const  inventoryBalanceExtBills = inventoryBalanceExt.filter(item=> {
            if(item.type == 'Bill')
            {
                return true;
            }
        })

        let calculatedCash = new AtmCashResponse();
        this.populateCashGroups(amount, inventoryBalanceExt, 'Bill', calculatedCash.billsAmount );
        //this.calculateCash(3015, inventoryBalanceExt, 'Coin', calculatedCash.coinsAmount );

        //const inventory= await withdrawalDao.getInventory();

        //if response is valid send approval
        return inventoryBalance;
    }



    populateCashGroups(amount: number, inventoryBalanceExt: Array<InventoryItem>, type: string,groupAmount: Array<CashGroup>) {
        const  inventoryBalanceByType = inventoryBalanceExt.filter(item=> {
            if(item.type == type)
            {
                return true;
            }
        })

        if (inventoryBalanceByType.length==0) {
            return;
        }
      
        inventoryBalanceByType.forEach(item => {
            if (amount >= item.value) 
            {
                const casheGroup=new CashGroup();
                casheGroup.groupValue=item.value;
                const optimalCount = Math.floor(amount / item.value);
                casheGroup.groupCount =Math.min(optimalCount, item.amount);
                groupAmount.push(casheGroup);
                console.log(casheGroup);
                amount=amount-casheGroup.groupValue*casheGroup.groupCount;
            }
        });

        console.log(`remaining amount:${amount}`);
    }

    

    

}

export default new WithdrawalService()