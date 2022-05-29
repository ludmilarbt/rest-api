import { Account } from "./account";


/*
    In actual implementation we will need customers and acounts managing, currently it is out of the scope
*/
export class AtmOperationModel{
    account: Account = new Account();
    errors: Array<string> =new Array<string>();
    errorsMessage?: string;

    constructor (account: Account) {
        this.account = account;
    }

    combineErrors() {
        return this.errors ==null ? '':  Object.values(this.errors).join(';');
    }
}
