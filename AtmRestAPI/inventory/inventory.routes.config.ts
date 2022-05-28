import express from 'express';
import { Application } from 'express';
import {CommonRoutesConfig} from '../common/common.routes.config';
import inventoryController from './controllers/inventory.controller';
//import operationsMiddleware from './middleware/operations.middleware';
import { body } from 'express-validator';
import bodyValidationMiddleware from '../common/middleware/body.validation.middleware';

export class InventoryRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'OperationsRoutes');
    }

    configureRoutes(): express.Application {

        this.app
            .route(`/inventory`)
            .get(
                inventoryController.listInventoryItems);

        this.app
                .route(`/inventory`)
                .post(
                    inventoryController.pushInventoryItem);

        this.app
                .route(`/inventory`)
                .delete(
                    inventoryController.clean);



            return this.app;
    }

}