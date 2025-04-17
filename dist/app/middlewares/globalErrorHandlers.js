"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../error/AppError");
const globalErrorHandler = (err, req, res, next) => {
    var _a;
    let statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    let message = "Something went wrong";
    if (err instanceof AppError_1.AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === "P2025") {
        console.log(err);
        statusCode = http_status_1.default.NOT_FOUND;
        message = ((_a = err.meta) === null || _a === void 0 ? void 0 : _a.cause) || "Record not found";
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "ZodError") {
        statusCode = http_status_1.default.BAD_REQUEST;
        message = "Validation failed";
    }
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
};
exports.default = globalErrorHandler;
