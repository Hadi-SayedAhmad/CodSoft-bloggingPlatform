import express from "express"
import { protect } from "../middlewares/authMiddleware.js";

import { createBlog } from "../controllers/blogControllers.js";
const router = express.Router();

router.post("/create", protect, createBlog)

export default router;