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


        this.app
            .route(`/withdrawal`)
            .post(
                body('amount').exists().withMessage('Amount parameter is missing in request'),
                body('amount').isDecimal().withMessage('Amount parameter should be decimal'),
               bodyValidationMiddleware.verifyBodyFieldsErrors,
                operationsMiddleware.validateWithdrawalAmount,
                withdrawalController.withdrawMoney,
                operationsMiddleware.validateWithdrawalResponse);

            return this.app;
    }

}