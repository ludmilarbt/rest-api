import { AtmMachine } from "../../inventory/model/atm.machine.model";

export class AtmUser {
    id?: string;
    role: UserRole=UserRole.GUEST; 
    name?:string;
    machines?: Array<AtmMachine>;
    cardNumber?:string;
}

export enum UserRole {
    GUEST=1,
    TECHNICIAN = 2,
    SUPERVISER= 3
}