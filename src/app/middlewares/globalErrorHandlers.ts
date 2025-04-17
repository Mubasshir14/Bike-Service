import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { AppError } from "../error/AppError";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode: number = httpStatus.INTERNAL_SERVER_ERROR;
  let message = "Something went wrong";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } 
  
  else if (err?.code === "P2025") {
    console.log(err);
    statusCode = httpStatus.NOT_FOUND;
    message = err.meta?.cause || "Record not found";
  } 
  
  else if (err?.name === "ZodError") {
    statusCode = httpStatus.BAD_REQUEST;
    message = "Validation failed";
  }

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default globalErrorHandler;
