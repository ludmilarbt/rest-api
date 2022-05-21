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
const withdrawal_dao_1 = __importDefault(require("../daos/withdrawal.dao"));
class WithdrawalService {
    withdrawMoney(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const atmCashResponse = yield withdrawal_dao_1.default.withdrawMoney(amount);
            //if response is valid send approval
            return atmCashResponse;
        });
    }
}
exports.default = new WithdrawalService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXdhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vb3BlcmF0aW9ucy9zZXJ2aWNlcy93aXRoZHJhd2FsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0RUFBbUQ7QUFJbkQsTUFBTSxpQkFBaUI7SUFDYixhQUFhLENBQUMsTUFBYzs7WUFDOUIsTUFBTSxlQUFlLEdBQUUsTUFBTSx3QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqRSxvQ0FBb0M7WUFDcEMsT0FBTyxlQUFlLENBQUM7UUFDM0IsQ0FBQztLQUFBO0NBRUo7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUEifQ==