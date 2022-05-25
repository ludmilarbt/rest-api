import express from 'express';
import withdrawalDao from '../repos/withdrawal.dao';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response'
import {inventoryBalance} from '../../inventory/dto/inventory.cassetes';
import {InventoryItem} from '../../inventory/dto/inventory.item';
import { CashGroup } from '../../inventory/dto/cash.group';

class WithdrawalService {
    async withdrawMoney(amount: number) {
        
        const inventoryBalance= await withdrawalDao.getInventory();

        console.log(`inventory: ${inventoryBalance}`);

        let calculatedCash = new AtmCashResponse();
        let remainingAmount: number =amount;
        remainingAmount = this.populateCashGroups(amount, inventoryBalance, 'Bill', calculatedCash.billsAmount );
        if(remainingAmount>0) {
            remainingAmount = this.populateCashGroups(remainingAmount, inventoryBalance, 'Coin', calculatedCash.coinsAmount );
        }

        return calculatedCash;
        
        //if response is valid send approval
        //return atmCashResponse;
    }

    async listInventoryItems(amount: number) {
        
    }



    populateCashGroups(amount: number, inventoryBalanceExt: Array<InventoryItem>, type: string,groupAmount: Array<CashGroup>): number {
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
        return amount;
    }

    

    

    

}

export default new WithdrawalService()