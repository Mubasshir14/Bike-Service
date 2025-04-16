import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
import httpStatus from "http-status";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "BIKE SERVICE SERVER IS RUNNING",
  });
});

app.use("/api/", router);
app.use(globalErrorHandler);


app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: "Api Not Found!",
      error: {
        path: req.originalUrl,
        message: "Your requested path is not found!",
      },
    });
  });
  
  export default app;