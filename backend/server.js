import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js"
const app = express();
const port = 3000;
dotenv.config();
import userRouter from "./routes/userRoutes.js"
connectDB();

app.get("/", (req, res) => {
    res.send("Api is running...");
})

app.use("/api/user", userRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})