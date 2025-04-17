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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordService = exports.getPendingOrOverdueServices = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma_2 = __importDefault(require("../../../shared/prisma"));
const date_fns_1 = require("date-fns");
const AppError_1 = require("../../error/AppError");
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { status = "pending" } = data, restData = __rest(data, ["status"]);
    const result = yield prisma_2.default.serviceRecord.create({
        data: Object.assign(Object.assign({}, restData), { status: status }),
    });
    return result;
});
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.findMany({});
    return result;
});
const getServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    if (!result) {
        throw new AppError_1.AppError(404, "Service Not Found");
    }
    return result;
});
const updateServiceById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_2.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    if (data.completionDate) {
        data.status = prisma_1.ServiceStatus.done;
    }
    const result = yield prisma_2.default.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data,
    });
    return result;
});
const getPendingOrOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = (0, date_fns_1.subDays)(new Date(), 7);
    const result = yield prisma_2.default.serviceRecord.findMany({
        where: {
            AND: [
                {
                    status: {
                        in: [prisma_1.ServiceStatus.pending, prisma_1.ServiceStatus.in_progress],
                    },
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            ],
        },
    });
    return result;
});
exports.getPendingOrOverdueServices = getPendingOrOverdueServices;
exports.ServiceRecordService = {
    createService,
    getAllService,
    getServiceById,
    updateServiceById,
    getPendingOrOverdueServices: exports.getPendingOrOverdueServices,
};
