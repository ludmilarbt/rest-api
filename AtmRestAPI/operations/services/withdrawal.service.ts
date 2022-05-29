import withdrawalRepo from '../repos/withdrawal.repo';
import { AtmModel } from '../../common/model/atm.model';
import debug from 'debug';

export interface IWithdrawalService {
    withdrawMoney(amount: number): any;
}

const log: debug.IDebugger = debug('app:withdrawal-service');


export class WithdrawalService implements IWithdrawalService{

    async withdrawMoney(amount: number) {
        
        const atmModel=new AtmModel();
        atmModel.inventory = await withdrawalRepo.getInventoryBalance();

        const withdrawal=atmModel.getWithdrowalModel();
        withdrawal.calculateCashReponse(amount);

        if(withdrawal?.errors.length==0) {
            withdrawalRepo.saveInventoryBalance(atmModel.inventory);
        }

        return (withdrawal.createAtmCashResponse());
    }
}

export default new WithdrawalService()


