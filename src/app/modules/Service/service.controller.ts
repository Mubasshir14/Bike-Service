import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ServiceRecordService } from "./service.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createService: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceRecordService.createService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllService: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceRecordService.getAllService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getServiceById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceRecordService.getServiceById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const updateServiceById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceRecordService.updateServiceById(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

const getPendingOrOverdueServices: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceRecordService.getPendingOrOverdueServices();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const ServiceRecordController = {
  createService,
  getAllService,
  getServiceById,
  updateServiceById,
  getPendingOrOverdueServices
};
