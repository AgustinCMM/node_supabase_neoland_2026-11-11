import { Router } from "express";
import { 
  createProduct, 
  findProduct, 
  updateProduct, 
  deleteProduct 
} from "../controllers/products.controller.js";

const router = Router();

router.post("/", createProduct);
router.get("/:name", findProduct);
router.put("/:name", updateProduct);
router.delete("/:name", deleteProduct);

export default router;