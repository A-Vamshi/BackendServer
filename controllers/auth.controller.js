import mongoose from "mongoose";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        // Create a new user and sign up
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUsers = await User.create({ name, email, password: hashedPassword }], { session });
        const token = jwt.sign({ userId : newUsers[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        session.endSession();
        res.status(201).json({
            success: true,
            message: "User created sucessfully",
            data: {
                token, 
                user: newUsers[0]
            }
        })

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = async (req, res, next) => {

}

export const signOut = async (req, res, next) => {

}