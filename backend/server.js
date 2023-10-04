import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js"
const app = express();
app.use(express.json())
const port = 3000;
dotenv.config();
import userRouter from "./routes/userRoutes.js"
import authRouter from "./routes/authRoutes.js"
connectDB();

app.get("/", (req, res) => {
    res.send("Api is running...");
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})