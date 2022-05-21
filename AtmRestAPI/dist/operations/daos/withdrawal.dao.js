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
Object.defineProperty(exports, "__esModule", { value: true });
const atm_cash_response_1 = require("../../inventory/dto/atm.cash.response");
class WithdrawalDao {
    withdrawMoney(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return new atm_cash_response_1.AtmCashResponse();
        });
    }
}
exports.default = new WithdrawalDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXdhbC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9vcGVyYXRpb25zL2Rhb3Mvd2l0aGRyYXdhbC5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSw2RUFBcUU7QUFFckUsTUFBTSxhQUFhO0lBQ1IsYUFBYSxDQUFDLE1BQWM7O1lBQy9CLE9BQU8sSUFBSSxtQ0FBZSxFQUFFLENBQUU7UUFDbEMsQ0FBQztLQUFBO0NBRUo7QUFFRCxrQkFBZSxJQUFJLGFBQWEsRUFBRSxDQUFBIn0=