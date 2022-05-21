import express from 'express';
import {AtmCashResponse} from '../../inventory/dto/atm.cash.response'

class WithdrawalDao {
    async  withdrawMoney(amount: number) {
        return new AtmCashResponse() ;
    }

}

export default new WithdrawalDao()