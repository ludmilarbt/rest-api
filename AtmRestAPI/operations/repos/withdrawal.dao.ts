import express from 'express';
import mongooseService from '../../common/services/mongoose.service';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response';
import {InventoryItem} from '../../inventory/dto/inventory.item';
import { CashGroup } from '../../inventory/dto/cash.group';
import debug from 'debug';


const log: debug.IDebugger = debug('app:users-dao');

class WithdrawalDao {

    
    Schema = mongooseService.getMongoose().Schema;

    inventorySchema = new this.Schema({
        type: String,
        value: Number,
        amount: Number,
    });

    Inventory = mongooseService.getMongoose().model('Inventory', this.inventorySchema);

    constructor() {
        log('Created new instance of WithdrawalDao');

       /* 
       const newItem = new this.Inventory({
            type: "Bill",
            value: 100,
            amount: 2

        });
       
        newItem.save();

         */
        
    }

    async getInventory() {

        //return this.createMockInventory();

        //db.inventories.aggregate([{ $group: {_id: {field1: "$type", field2: "$value"}, amount: { $sum: "$amount" }}}, {$project:{_id:0, "type": "$_id.field1","value": "$_id.field2", "amount":"$amount"} }])
            let inventory = this.Inventory.aggregate([{ $group: {_id: {field1: "$type", field2: "$value"}, amount: { $sum: "$amount" }}}, {$project:{_id:0, "type": "$_id.field1","value": "$_id.field2", "amount":"$amount"} }])
        .exec();
        
        console.log(JSON.stringify(inventory));

        return inventory;
           
    }

    async  withdrawMoney(amount: number) {
        return new AtmCashResponse() ;
    }

    createMockInventory() {
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

        newItem=new InventoryItem() 
        newItem.type= "Coin";
        newItem.value= 0.5;
        newItem.amount= 50;
        newItem.sum= 50;
        inventoryBalanceExt.push( newItem);
        newItem=new InventoryItem() 
        newItem.type= "Coin";
        newItem.value= 0.1;
        newItem.amount= 3;
        newItem.sum= 100;
        inventoryBalanceExt.push( newItem);

        return inventoryBalanceExt;

    }

}

export default new WithdrawalDao()