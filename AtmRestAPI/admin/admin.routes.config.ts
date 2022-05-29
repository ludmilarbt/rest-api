import express from 'express';
import { Application } from 'express';
import {CommonRoutesConfig} from '../common/common.routes.config';
import { body } from 'express-validator';
import bodyValidationMiddleware from '../common/middleware/body.validation.middleware';

export class AdminRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'OperationsRoutes');
    }

    configureRoutes(): express.Application {

        //INVENTORY routes:
        //******************* */
        /*
        get `/inventory`
        post `/inventory`
        delete `/inventory`
        get `/inventory/:machineId`
        post `/inventory/:machineId`
        post `/inventory/:machineId/state`
        patch `/inventory/:machineId`
        delete `/inventory/:machineId`
        */

        //USERS
        //******************* */
        /*
        get `/users`
        post `/users`
        delete `/users`
        users/auth/:userId
        get `/users/:userId`
        put `/users/:userId`
        patch `/users/:userId`
        delete `/users/:userId`
        */

        this.app
        .route(`/health`)
        .get((req:express.Request, res:express.Response, next: express.NextFunction) =>  res.status(200).send('health test passed'));

        return this.app;
    }

}