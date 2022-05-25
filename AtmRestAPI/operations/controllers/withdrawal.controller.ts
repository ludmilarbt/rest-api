import express from 'express';
import withdrawalService from '../services/withdrawal.service';


class WithdrawalController {

   async withdrawMoney(req: express.Request, res: express.Response) {
       
        const response=await withdrawalService.withdrawMoney(req.body.amount);
        
        res.status(200).send(response);
    }

    async listInventoryItems(req: express.Request, res: express.Response) {
        const approval=await withdrawalService.listInventoryItems(req.body.amount);
        
        res.status(200).send(approval);
    }


    
}

export default new WithdrawalController()