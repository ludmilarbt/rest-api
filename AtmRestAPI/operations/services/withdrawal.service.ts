import express from 'express';
import withdrawalDao from '../daos/withdrawal.dao';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response'
import {inventoryBalance} from '../../inventory/dto/inventory.cassetes';


class WithdrawalService {
    async withdrawMoney(amount: number) {
        const atmCashResponse= await withdrawalDao.withdrawMoney(amount);



        //if response is valid send approval
        return atmCashResponse;
    }

    async listInventoryItems() {
        console.log('inventoryBalance' + JSON.stringify(inventoryBalance));

        
        
        const inventory= await withdrawalDao.getInventory();

        //if response is valid send approval
        return inventory;
    }

    

}

export default new WithdrawalService()