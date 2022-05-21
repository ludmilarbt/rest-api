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
const withdrawal_service_1 = __importDefault(require("../services/withdrawal.service"));
class WithdrawalController {
    withdrawMoney(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const approval = yield withdrawal_service_1.default.withdrawMoney(req.body.amount);
            res.status(200).send(approval);
        });
    }
    listInventoryItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const approval = yield withdrawal_service_1.default.listInventoryItems();
            res.status(200).send(approval);
        });
    }
}
exports.default = new WithdrawalController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXdhbC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vb3BlcmF0aW9ucy9jb250cm9sbGVycy93aXRoZHJhd2FsLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3RkFBK0Q7QUFHL0QsTUFBTSxvQkFBb0I7SUFFakIsYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELE1BQU0sUUFBUSxHQUFDLE1BQU0sNEJBQWlCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDaEUsTUFBTSxRQUFRLEdBQUMsTUFBTSw0QkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBRTVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtDQUlKO0FBRUQsa0JBQWUsSUFBSSxvQkFBb0IsRUFBRSxDQUFBIn0=