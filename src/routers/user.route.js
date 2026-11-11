import { Router } from "express";
import { 
  getUserController, 
  setUserController, 
  findUserController, 
  updateUserController, 
  deleteUserController 
} from "../controllers/user.controllers.js";

const router = Router();

router.get("/", getUserController);
router.post("/", setUserController);
router.get("/:id", findUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
