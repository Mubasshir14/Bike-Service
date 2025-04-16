import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BikeService } from "./bike.service";

const createBike: RequestHandler = catchAsync(async (req, res) => {
  const result = await BikeService.createBike(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBikes: RequestHandler = catchAsync(async (req, res) => {
  const result = await BikeService.getAllBikes();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getSingleBike: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeService.getSingleBike(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

export const BikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
};
