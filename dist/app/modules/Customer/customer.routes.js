"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post("/", customer_controller_1.CustomerController.createUser);
router.get("/", customer_controller_1.CustomerController.getAllCustomers);
router.get("/:id", customer_controller_1.CustomerController.getCustomerById);
router.put("/:id", customer_controller_1.CustomerController.updateCustomerById);
router.delete("/:id", customer_controller_1.CustomerController.deleteCustomerFromDb);
exports.CustomerRoutes = router;
