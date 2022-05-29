import { AtmCassete } from "./atm.cassete.model";

export class AtmMachine {
    id:string ='';
    location?:string;
    state?:MachineState;
    cassetes: Array<AtmCassete>=new Array<AtmCassete>();
    type:MachineType = MachineType.Standard;
}

export enum MachineState {
    ON=1,
    OUT_OF_SERVICE = 2,
    BROKEN= 3
}

export enum MachineType {
    Standard = 1,
    GrenLabel=2,
    PinkLabel = 3,
}


