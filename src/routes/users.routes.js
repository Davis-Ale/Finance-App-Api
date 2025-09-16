import { Router } from "express";
import { createUserController } from "../controllers/users/create-user.controller.js";
import { getUserByIdController } from "../controllers/users/get-user-by-id.controller.js";

const router = Router();

router.post("/", createUserController);
router.get("/:id", getUserByIdController);

export default router;
