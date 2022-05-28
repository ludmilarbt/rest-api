import express from 'express';
import debug from 'debug';
import { AtmWithdrawalModel } from '../../common/model/atm.withdrawal.model';
import { OperationCanceledException } from 'typescript';

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
    
    async validateWithdrawalResponseErrors(req: express.Request, res: express.Response, next: express.NextFunction) {
       
        const withdrowalResponse = res.locals.result as AtmWithdrawalModel;
        
        if(withdrowalResponse.errorsMessage !== undefined) {
            if(withdrowalResponse.errorsMessage.indexOf('amount conflict')>0) {
                res.status(409).send({
                    error: `${ withdrowalResponse.errorsMessage}`
                });
            } else {
                next(new Error(withdrowalResponse.errorsMessage));
            }
        } else {
            res.status(200).send(withdrowalResponse);
        }
            
    }
        
    }
    


export default new OperationsMiddleware();








