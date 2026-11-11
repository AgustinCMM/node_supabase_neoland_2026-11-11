import { Router } from "express";
import { 
  createService, 
  findService, 
  updateService, 
  deleteService 
} from "../controllers/services.controller.js";

const router = Router();

router.post("/", createService);
router.get("/:name", findService);
router.put("/:name", updateService);
router.delete("/:name", deleteService);

export default router;