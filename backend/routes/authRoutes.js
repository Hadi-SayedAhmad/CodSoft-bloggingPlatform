import express from "express";
import { signIn, signUp, signOut } from "../controllers/authControllers.js";
import {protect} from "../middlewares/authMiddleware.js"

const router = express.Router();

router.post("/signup", signUp)
router.post("/signin", signIn)
router.get("/signout", protect, signOut);

export default router;