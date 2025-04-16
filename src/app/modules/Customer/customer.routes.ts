import express, { Request, Response } from "express";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post("/", CustomerController.createUser);
router.get("/", CustomerController.getAllCustomers);
router.get("/:id", CustomerController.getCustomerById);
router.put("/:id", CustomerController.updateCustomerById);
router.delete("/:id", CustomerController.deleteCustomerFromDb);

export const CustomerRoutes = router;
