import express from 'express';
import debug from 'debug';
import { AtmCashResponse } from '../../inventory/dto/atm.cash.response';

const log: debug.IDebugger = debug('app:withdrawal-controller');

class OperationsMiddleware {
    async validateWithdrawalAmount(req: express.Request, res: express.Response, next: express.NextFunction) {
        if(req.body && req.body.amount) {
            if(req.body.amount<2000 && req.body.amount>0) {
                next();
            } else if (req.body.amount<0) {
                res.status(400).send({
                    error: 'Invalid amount request parameter: value should be positive number'
                });
            } else {
                res.status(400).send({
                    error: 'Invalid amount request parameter: value should not exceed 2000'
                });
            }
        } else {
            res.status(400).send({
                error: 'Missing amount request parameter'
            });
        }
    }

    
    async validateWithdrawalResponse(req: express.Request, res: express.Response, next: express.NextFunction) {
        //let responseCotroller= res.locals.result;
        //s.status(409).send(res);
        
        const withdrowalResponse = res.locals.result as AtmCashResponse;
        if(withdrowalResponse.maxAvailableAmount === undefined) {
            res.status(200).send(
                res.locals.result
            );
        } else {
            res.status(409).send({
                error: `Requested amount conflict, maximun available amount is: ${ withdrowalResponse.maxAvailableAmount}`
            });
        }
        
    }
    
}

export default new OperationsMiddleware();








