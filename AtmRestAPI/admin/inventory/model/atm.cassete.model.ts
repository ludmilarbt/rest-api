export class AtmCassete {
    id?:string;
    type?: CasseteType;
    value:number =0;
    amount:number = 0;
    maxAmount:number = 0;
}

export enum CasseteType {
    BILL=1,
    COIN = 2
}