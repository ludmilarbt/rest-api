import express from 'express';
import withdrawalRepo from '../repos/withdrawal.repo';
import { AtmModel } from '../../common/model/atm.model';

import { injectable, inject } from "inversify";
import "reflect-metadata";

export interface IWithdrawalService {
    testDI: number;
    withdrawMoney(amount: number): any;
}

@injectable()
export class WithdrawalService implements IWithdrawalService{

    testDI: number = 10;

    async withdrawMoney(amount: number) {
        
        const atmModel=new AtmModel();
        atmModel.inventory = await withdrawalRepo.getInventoryBalance();

        console.log(`inventory: ${atmModel.inventory}`);

        const withdrawal=atmModel.getWithdrowalModel();
        withdrawal.calculateCashReponse(amount);

        if(withdrawal?.errors.length==0) {
            withdrawalRepo.saveInventoryBalance(atmModel.inventory);
        }

        return (withdrawal.createAtmCashResponse());
    }
}

export default new WithdrawalService()


