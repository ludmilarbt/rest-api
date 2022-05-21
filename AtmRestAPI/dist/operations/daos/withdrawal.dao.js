"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const atm_cash_response_1 = require("../../inventory/dto/atm.cash.response");
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:users-dao');
class WithdrawalDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.inventorySchema = new this.Schema({
            type: String,
            value: Number,
            amount: Number,
        });
        this.Inventory = mongoose_service_1.default.getMongoose().model('Inventory', this.inventorySchema);
        log('Created new instance of UsersDao');
        /*const newItem = new this.Inventory({
            type: "Bill",
            value: 100,
            amount: 2

        });
        newItem.save();*/
    }
    getInventory(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Inventory.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    withdrawMoney(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return new atm_cash_response_1.AtmCashResponse();
        });
    }
}
exports.default = new WithdrawalDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXdhbC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9vcGVyYXRpb25zL2Rhb3Mvd2l0aGRyYXdhbC5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RkFBcUU7QUFDckUsNkVBQXFFO0FBQ3JFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXBELE1BQU0sYUFBYTtJQVlmO1FBVkEsV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRTlDLG9CQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzlCLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUM7UUFFSCxjQUFTLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUcvRSxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUV4Qzs7Ozs7O3lCQU1pQjtJQUNyQixDQUFDO0lBRUssWUFBWSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQ25DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7aUJBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVNLGFBQWEsQ0FBQyxNQUFjOztZQUMvQixPQUFPLElBQUksbUNBQWUsRUFBRSxDQUFFO1FBQ2xDLENBQUM7S0FBQTtDQUVKO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQSJ9