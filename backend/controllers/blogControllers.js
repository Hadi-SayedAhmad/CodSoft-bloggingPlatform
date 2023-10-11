import asyncHandler from "../middlewares/asyncHandler.js";
import Blog from "../models/blogModel.js"

export const createBlog = asyncHandler(async (req, res) => {
    const newBlog = await Blog.create(req.body)
    if (newBlog) {
        res.status(201).json({
            success: true,
            newBlog
        })
    } else {
        res.status(400);
        throw new Error("Can not create blog!");
    }


})