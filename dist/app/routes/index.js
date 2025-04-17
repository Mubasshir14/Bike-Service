"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_routes_1 = require("../modules/Customer/customer.routes");
const bike_route_1 = require("../modules/Bike/bike.route");
const service_routes_1 = require("../modules/Service/service.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/customers",
        route: customer_routes_1.CustomerRoutes,
    },
    {
        path: "/bikes",
        route: bike_route_1.BikeRoutes,
    },
    {
        path: "/services",
        route: service_routes_1.ServiceRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
