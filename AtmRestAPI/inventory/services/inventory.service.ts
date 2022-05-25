import express from 'express';
import inventoryRepo from '../repos/inventory.repo';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response'
import {inventoryBalance} from '../../inventory/dto/inventory.cassetes';
import {InventoryItem} from '../../inventory/dto/inventory.item';


class InventoryService {
    

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