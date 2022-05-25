import express from 'express';
import mongooseService from '../../common/services/mongoose.service';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response';
import {InventoryItem} from '../../inventory/dto/inventory.item';
import debug from 'debug';
import inventoryRepo from '../../inventory/repos/inventory.repo';


const log: debug.IDebugger = debug('app:users-dao');

class WithdrawalRepo {

    /*
    Schema = mongooseService.getMongoose().Schema;

    inventorySchema = new this.Schema({
        type: String,
        value: Number,
        amount: Number,
    });

    Inventory = mongooseService.getMongoose().model('Inventory', this.inventorySchema);
*/
    constructor() {
    }

    async getInventoryBalance() {


        //db.inventories.aggregate([{ $group: {_id: {field1: "$type", field2: "$value"}, amount: { $sum: "$amount" }}}, {$project:{_id:0, "type": "$_id.field1","value": "$_id.field2", "amount":"$amount"} }])
        let inventory = inventoryRepo.getInventory(); //this.Inventory.aggregate([{ $group: {_id: {field1: "$type", field2: "$value"}, amount: { $sum: "$amount" }}}, {$project:{_id:0, "type": "$_id.field1","value": "$_id.field2", "amount":"$amount"} },{ $sort: { "type": -1, "value": -1} }]).exec();
        
        console.log(JSON.stringify(inventory));

        return inventory;
           
    }

    

}

export default new WithdrawalRepo()