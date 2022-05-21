import express from 'express';
import debug from 'debug';

const log: debug.IDebugger = debug('app:withdrawal-controller');

class OperationsMiddleware {
    async validateWithdrawalAmount(req: express.Request, res: express.Response, next: express.NextFunction) {
        if(req.body && req.body.amount) {
            if(req.body.amount<2000) {
                next();
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
}

export default new OperationsMiddleware();








