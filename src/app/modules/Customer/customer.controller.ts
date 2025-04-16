import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CustomerService } from "./customer.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await CustomerService.createCustomer(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomers: RequestHandler = catchAsync(async (req, res) => {
  const result = await CustomerService.getAllCustomers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getCustomerById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.getCustomerById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

const updateCustomerById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.updateCustomerById(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});


const deleteCustomerFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.deleteCustomerFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
    data: result,
  });
});

export const CustomerController = {
  createUser,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerFromDb
};
