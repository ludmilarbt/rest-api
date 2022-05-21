"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const withdrawal_controller_1 = __importDefault(require("./controllers/withdrawal.controller"));
const operations_middleware_1 = __importDefault(require("./middleware/operations.middleware"));
const express_validator_1 = require("express-validator");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
class OperationsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'OperationsRoutes');
    }
    configureRoutes() {
        this.app.route(`/withdrawal1`)
            .get((req, res) => {
            res.status(200).send(`withdrawal1`);
        });
        this.app
            .route(`/withdrawal`)
            .post(express_validator_1.body('amount').exists().withMessage('Amount parameter is missing in request'), express_validator_1.body('amount').isDecimal().withMessage('Amount parameter should be decimal'), body_validation_middleware_1.default.verifyBodyFieldsErrors, operations_middleware_1.default.validateWithdrawalAmount, withdrawal_controller_1.default.withdrawMoney);
        return this.app;
    }
}
exports.OperationsRoutes = OperationsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vb3BlcmF0aW9ucy9vcGVyYXRpb25zLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEseUVBQWtFO0FBQ2xFLGdHQUF1RTtBQUN2RSwrRkFBc0U7QUFDdEUseURBQXlDO0FBQ3pDLGlIQUF1RjtBQUV2RixNQUFhLGdCQUFpQixTQUFRLHlDQUFrQjtJQUVwRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZUFBZTtRQUdYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUM3QixHQUFHLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxHQUFHO2FBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQzthQUNwQixJQUFJLENBQ0Qsd0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsd0NBQXdDLENBQUMsRUFDN0Usd0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsb0NBQW9DLENBQUMsRUFDN0Usb0NBQXdCLENBQUMsc0JBQXNCLEVBQzlDLCtCQUFvQixDQUFDLHdCQUF3QixFQUM3QywrQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDeEIsQ0FBQztDQUVKO0FBMUJELDRDQTBCQyJ9