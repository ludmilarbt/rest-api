import express from 'express';
import withdrawalService from '../services/withdrawal.service';


class WithdrawalController {

   async withdrawMoney(req: express.Request, res: express.Response) {
        const approval=await withdrawalService.withdrawMoney(req.body.amount);
        
        res.status(200).send(approval);
    }

    async listInventoryItems(req: express.Request, res: express.Response) {
        const approval=await withdrawalService.listInventoryItems();
        
        res.status(200).send(approval);
    }


    
}

export default new WithdrawalController()