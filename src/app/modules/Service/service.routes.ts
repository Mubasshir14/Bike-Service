import express, { Request, Response } from "express";
import { ServiceRecordController } from "./service.controller";

const router = express.Router();

router.get("/status", ServiceRecordController.getPendingOrOverdueServices);
router.post("/", ServiceRecordController.createService);
router.get("/", ServiceRecordController.getAllService);
router.get("/:id", ServiceRecordController.getServiceById);
router.put("/:id", ServiceRecordController.updateServiceById);
// router.delete("/:id", ServiceRecordController.deleteCustomerFromDb);

export const ServiceRoutes = router;
