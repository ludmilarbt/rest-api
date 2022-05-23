import { CashGroup } from "./cash.group";

export class AtmCashResponse {
    billsAmount: Array<CashGroup>=new Array<CashGroup>();
    coinsAmount: Array<CashGroup>=new Array<CashGroup>();
}