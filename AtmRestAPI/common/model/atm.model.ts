import { Account } from "./account";
import { AtmWithdrawalModel } from "./atm.withdrawal.model";
import { InventoryItem } from "./inventory.item";

export class AtmModel {

    inventory: Array<InventoryItem> =new Array<InventoryItem>(); //will be for machines

    getWithdrowalModel() {
        return new AtmWithdrawalModel(new Account(), this.inventory);
    }
    
}
