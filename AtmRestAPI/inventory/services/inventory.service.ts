import express from 'express';
import inventoryRepo from '../repos/inventory.repo';


class InventoryService {
    
    async resetInventory() {
        const inventoryBalance= await inventoryRepo.resetInventory();

        return inventoryBalance;
    }
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