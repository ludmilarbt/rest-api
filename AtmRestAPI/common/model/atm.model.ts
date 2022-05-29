import { Account } from "./account";
import { AtmWithdrawalModel } from "./atm.withdrawal.model";
import { InventoryItem } from "./inventory.item";

export class AtmModel {

    inventory: Array<InventoryItem> =new Array<InventoryItem>(); //will be per machine when admin api will be ready

    getWithdrowalModel() {
        return new AtmWithdrawalModel(new Account(), this.inventory);
    }
    
}
