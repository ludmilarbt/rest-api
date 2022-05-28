import express from 'express';
import inventoryRepo from '../repos/inventory.repo';
import {AtmWithdrawalModel} from '../../common/model/atm.withdrawal.model'
import {inventoryBalance} from '../../inventory/dto/inventory.cassetes';
import {InventoryItem} from '../../common/model/inventory.item';


class InventoryService {
    async clean() {
        
        const inventoryBalance= await inventoryRepo.cleanInventory();

        return inventoryBalance;
    }
    

    async getInventory() {
        const inventoryBalance= await inventoryRepo.getInventory();

        return inventoryBalance;
    }

    async pushInventoryItem(type: string, value:number, amount: number) {
        const inventoryBalance= await inventoryRepo.pushInventoryItem(type, value, amount);

        console.log(`inventory: ${inventoryBalance}`);

        return inventoryBalance;
    }


}

export default new InventoryService()