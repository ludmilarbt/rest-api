import express from 'express';
import withdrawalService from '../services/withdrawal.service';


class WithdrawalController {

   async withdrawMoney(req: express.Request, res: express.Response, next: express.NextFunction) {
       
        const response=await withdrawalService.withdrawMoney(req.body.amount);
        res.locals.result = response;
        next();
    }


    
}

export default new WithdrawalController()