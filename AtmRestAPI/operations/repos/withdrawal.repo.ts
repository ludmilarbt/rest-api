import express from 'express';
import mongooseService from '../../common/services/mongoose.service';
import {AtmWithdrawalModel} from '../../common/model/atm.withdrawal.model';
import {InventoryItem} from '../../common/model/inventory.item';
import debug from 'debug';
import inventoryRepo from '../../inventory/repos/inventory.repo';


const log: debug.IDebugger = debug('app:users-dao');

class WithdrawalRepo {

    async getInventoryBalance() {

        let inventory = await inventoryRepo.getInventory(); //this.Inventory.aggregate([{ $group: {_id: {field1: "$type", field2: "$value"}, amount: { $sum: "$amount" }}}, {$project:{_id:0, "type": "$_id.field1","value": "$_id.field2", "amount":"$amount"} },{ $sort: { "type": -1, "value": -1} }]).exec();
        
        console.log(JSON.stringify(inventory));

        return inventory;
           
    }

    async saveInventoryBalance(inventory: InventoryItem[]) {

        inventory = inventory.filter(item=> {
            return item.amount != 0;
        })

        inventoryRepo.cleanInventory();
        let approval = await inventoryRepo.saveInventory(inventory); 
        
        console.log(JSON.stringify(approval));

        return approval;
    }

    getAccount() {
        throw new Error('Method not implemented.');
    }

}

export default new WithdrawalRepo()