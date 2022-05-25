import express from 'express';
import mongooseService from '../../common/services/mongoose.service';
import {InventoryItem} from '../dto/inventory.item';
import debug from 'debug';


const log: debug.IDebugger = debug('app:users-dao');

class InventoryRepo {

    
    Schema = mongooseService.getMongoose().Schema;

    inventorySchema = new this.Schema({
        type: String,
        value: Number,
        amount: Number,
    });

    Inventory = mongooseService.getMongoose().model('Inventory', this.inventorySchema);

    constructor() {
    }

    async getInventory() {

        //return this.createMockInventory();

        let inventory = this.Inventory 
        .aggregate([{ $group: {_id: {field1: "$type", field2: "$value"}, amount: { $sum: "$amount" }}}, {$project:{_id:0, "type": "$_id.field1","value": "$_id.field2", "amount":"$amount"} },{ $sort: { "type": -1, "value": -1} }])
        .exec();

                            
        return inventory;
           
    }

    async pushInventoryItem(type: string, value:number, amount: number) {
        const newItem = new this.Inventory({
            type: type,
            value: value,
            amount:amount

        });
        newItem.save();
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

export default new InventoryRepo()