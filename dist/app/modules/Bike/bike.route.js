"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.post("/", bike_controller_1.BikeController.createBike);
router.get("/", bike_controller_1.BikeController.getAllBikes);
router.get("/:id", bike_controller_1.BikeController.getSingleBike);
// router.put("/:id", CustomerController.updateCustomerById);
// router.delete("/:id", CustomerController.deleteCustomerFromDb);
exports.BikeRoutes = router;
