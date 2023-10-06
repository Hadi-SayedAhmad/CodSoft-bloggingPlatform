import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js"
import { generateToken } from "../utils/generateToken.js"

export const signUp = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = await User.create({
        username,
        email,
        password
    })
    generateToken(newUser._id, res);
    res.status(201).json({
        _id: newUser._id,
        name: newUser.username,
        email: newUser.email,
    });
})


export const signIn = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            name: user.username,
            email: user.email,
        });
    } else {
        res.status(404);
        throw new Error("Invalid email or passowrd!");
    }
})