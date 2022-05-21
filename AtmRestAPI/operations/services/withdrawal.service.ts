import express from 'express';
import withdrawalDao from '../daos/withdrawal.dao';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response'


class WithdrawalService {
    async withdrawMoney(amount: number) {
        const atmCashResponse= await withdrawalDao.withdrawMoney(amount);

        //if response is valid send approval
        return atmCashResponse;
    }

}

export default new WithdrawalService()