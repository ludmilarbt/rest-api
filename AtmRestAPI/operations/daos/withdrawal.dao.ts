import express from 'express';
import mongooseService from '../../common/services/mongoose.service';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response'
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
        return this.Inventory.find()
            .exec();
    }

    async  withdrawMoney(amount: number) {
        return new AtmCashResponse() ;
    }

}

export default new WithdrawalDao()