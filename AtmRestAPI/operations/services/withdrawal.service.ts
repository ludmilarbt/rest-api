import express from 'express';
import withdrawalRepo from '../repos/withdrawal.repo';
import { AtmModel } from '../../common/model/atm.model';

export interface IWithdrawalService {
    withdrawMoney(amount: number): any;
}


class WithdrawalService implements IWithdrawalService{
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