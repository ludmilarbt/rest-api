import { CasseteType } from "./atm.cassete.model";

export class AtmTransaction {
    id?: string;
    date?: Date;
    type?: CasseteType;
    amount?: string;
    userId?: string;
    machineId?:string;

}