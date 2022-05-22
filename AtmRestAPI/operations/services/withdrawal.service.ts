import express from 'express';
import withdrawalDao from '../daos/withdrawal.dao';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response'
import {inventoryBalance} from '../../inventory/dto/inventory.cassetes';
import {InventoryItem} from '../../inventory/dto/inventory.item';

class WithdrawalService {
    async withdrawMoney(amount: number) {
        const atmCashResponse= await withdrawalDao.withdrawMoney(amount);



        //if response is valid send approval
        return atmCashResponse;
    }

    async listInventoryItems() {
        console.log('inventoryBalance' + JSON.stringify(inventoryBalance));

        const inventoryBalanceExt=new Array<InventoryItem>();

        let newItem=new InventoryItem() 
        newItem.type= "Bill";
        newItem.value= 2000;
        newItem.amount= 2;
        newItem.sum= 4000;
        newItem=new InventoryItem() 
        newItem.type= "Bill";
        newItem.value= 100;
        newItem.amount= 1;
        newItem.sum= 200;
        inventoryBalanceExt.push( newItem);
        newItem=new InventoryItem() 
        newItem.type= "Bill";
        newItem.value= 5;
        newItem.amount= 3;
        newItem.sum= 15;
        inventoryBalanceExt.push( newItem);


        inventoryBalanceExt.push( newItem);



        this.countCurrency(3015, inventoryBalanceExt);
        
        //const inventory= await withdrawalDao.getInventory();

        //if response is valid send approval
        return inventoryBalance;
    }

    countCurrency(amount: number, inventoryBalanceExt: Array<InventoryItem>) {
        let notes = [2000, 500, 200, 100,50,20,5];
        let noteCounter = [0, 0, 0, 0,0,0,0];
      
        for (var i = 0; i < 3; i++) {
          if (amount >= inventoryBalanceExt[i].sum) 
          {
            noteCounter[i] = Math.floor(amount / inventoryBalanceExt[i].value);
            amount = amount - noteCounter[i] * inventoryBalanceExt[i].amount;
          }
        }
        // Print notes denomination
        console.log("Denomination Count:");
        for (var j = 0; j < 3; j++) {
          if (noteCounter[j] !== 0) {
            console.log(inventoryBalanceExt[j].value + " : " + noteCounter[j]);
          }
        }
      }

    

}

export default new WithdrawalService()