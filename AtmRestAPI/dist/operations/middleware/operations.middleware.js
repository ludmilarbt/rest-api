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
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:withdrawal-controller');
class OperationsMiddleware {
    validateWithdrawalAmount(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.amount) {
                if (req.body.amount < 2000) {
                    next();
                }
                else {
                    res.status(400).send({
                        error: 'Invalid amount request parameter: value should not exceed 2000'
                    });
                }
            }
            else {
                res.status(400).send({
                    error: 'Missing amount request parameter'
                });
            }
        });
    }
}
exports.default = new OperationsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vb3BlcmF0aW9ucy9taWRkbGV3YXJlL29wZXJhdGlvbnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFaEUsTUFBTSxvQkFBb0I7SUFDaEIsd0JBQXdCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUNsRyxJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzVCLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxFQUFFO29CQUNyQixJQUFJLEVBQUUsQ0FBQztpQkFDVjtxQkFBTTtvQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDakIsS0FBSyxFQUFFLGdFQUFnRTtxQkFDMUUsQ0FBQyxDQUFDO2lCQUNOO2FBQ0o7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxrQ0FBa0M7aUJBQzVDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLG9CQUFvQixFQUFFLENBQUMifQ==