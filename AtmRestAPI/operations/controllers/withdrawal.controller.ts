import express from 'express';
import withdrawalService from '../services/withdrawal.service';


class WithdrawalController {

   async withdrawMoney(req: express.Request, res: express.Response, next: express.NextFunction) {
       
        const response=await withdrawalService.withdrawMoney(req.body.amount);
        
        //res.result=response;
        //next(req,res,next);
        //return response;
        res.status(200).send(response);
    }


    
}

export default new WithdrawalController()