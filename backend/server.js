import express from "express";
const app = express();
const port = 3000;
import dotenv from "dotenv"
dotenv.config();
import connectDB from "./config/db.js"
connectDB();
app.get("/", (req, res) => {
    res.send("Api is running...");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})