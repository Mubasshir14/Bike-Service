import express, { Request, Response } from "express";
import { BikeController } from "./bike.controller";

const router = express.Router();

router.post("/", BikeController.createBike);
router.get("/", BikeController.getAllBikes);
router.get("/:id", BikeController.getSingleBike);
// router.put("/:id", CustomerController.updateCustomerById);
// router.delete("/:id", CustomerController.deleteCustomerFromDb);

export const BikeRoutes = router;
