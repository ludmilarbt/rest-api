import express from 'express';
import { Application } from 'express';
import {CommonRoutesConfig} from '../common/common.routes.config';
import withdrawalController from './controllers/withdrawal.controller';
import operationsMiddleware from './middleware/operations.middleware';
import { body } from 'express-validator';
import bodyValidationMiddleware from '../common/middleware/body.validation.middleware';

export class OperationsRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'OperationsRoutes');
    }

    configureRoutes(): express.Application {


        this.app.route(`/withdrawal1`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(`withdrawal1`);
        })

        this.app
            .route(`/withdrawal`)
            .post(
                body('amount').exists().withMessage('Amount parameter is missing in request'),
                body('amount').isDecimal().withMessage('Amount parameter should be decimal'),
               bodyValidationMiddleware.verifyBodyFieldsErrors,
                operationsMiddleware.validateWithdrawalAmount,
                withdrawalController.withdrawMoney);

            return this.app;
    }

}