import express from 'express';
import mongooseService from '../../common/services/mongoose.service';
import {InventoryItem} from '../../common/model/inventory.item';
import debug from 'debug';


const log: debug.IDebugger = debug('app:users-dao');

class InventoryRepo {

    
    Schema = mongooseService.getMongoose().Schema;

    inventorySchema = new this.Schema({
        type: String,
        value: Number,
        amount: Number,
    });

    /*
    const machineInventory = new this.Schema({
        //id: {type: Number},
        machineID: {
           type: Number
        },
        items: {
           type: Array<InventoryItem>
        }
     });
*/
    Inventory = mongooseService.getMongoose().model('Inventory', this.inventorySchema);

    


    constructor() {
    }

    async getInventory() {

        //return this.createMockInventory();
        //{ $group: {_id: {field1: "$type", field2: "$value"}, amount: { $sum: "$amount" }}}, {$project:{_id:0, "type": "$_id.field1","value": "$_id.field2", "amount":"$amount"} },
        let inventory = this.Inventory 
        .aggregate([ {$sort: { "type": -1, "value": -1, "amount": 1} }])
        .exec();
                            
        return inventory;
           
    }

    async saveInventory(inventory: InventoryItem[]) {
        inventory.forEach(item => {
            this.pushInventoryItem(item.type, item.value, item.amount);
        });
    }

    async cleanInventory() {

        let inventory = this.Inventory 
        .remove({});
                            
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
        inventoryBalanceExt.push( newItem);
        newItem=new InventoryItem() 
        newItem.type= "Bill";
        newItem.value= 100;
        newItem.amount= 10;
        inventoryBalanceExt.push( newItem);
        newItem=new InventoryItem() 
        newItem.type= "Bill";
        newItem.value= 5;
        newItem.amount= 3;
        inventoryBalanceExt.push( newItem);

        newItem=new InventoryItem() 
        newItem.type= "Coin";
        newItem.value= 0.5;
        newItem.amount= 50;
        inventoryBalanceExt.push( newItem);
        newItem=new InventoryItem() 
        newItem.type= "Coin";
        newItem.value= 0.1;
        newItem.amount= 3;
        inventoryBalanceExt.push( newItem);

        return inventoryBalanceExt;

    }

}

export default new InventoryRepo()