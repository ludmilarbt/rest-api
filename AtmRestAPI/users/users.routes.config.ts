import { CommonRoutesConfig } from "../common/common.routes.config";
import  express   from "express";
import { SuperProperty } from "typescript";

export class UsersRoutes  extends CommonRoutesConfig {
    constructor(app: express .Application) {
        super (app, 'UsersRoutes');
    }

    configureRoutes() {
        
        this.app.route(`/users`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(`List of users`);
        })

        return this.app;
    }

}

