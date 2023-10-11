import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser";
import blogRouter from "./routes/blogRoutes.js"
const app = express();

app.use(express.json())
app.use(cookieParser());
const port = 3000;
dotenv.config();
import {errorHandler} from "./middlewares/errorMiddleware.js"
import userRouter from "./routes/userRoutes.js"
import authRouter from "./routes/authRoutes.js"
connectDB();

app.get("/", (req, res) => {
    res.send("Api is running...");
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/blog", blogRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})