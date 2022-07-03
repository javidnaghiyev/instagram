import UserModel from "../models/user.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await UserModel.findOne({ email })
        if(!existingUser) return res.status(404).json({ message: 'This user doesn\'t exist'})
        const isPasswordCorrect = bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(400).json({ message: 'Invalid email or password' })
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET, { expiresIn: '1h'})
        res.status(200).json({ result: existingUser, token})
    } catch (error) {
        res.status(500).json("Something went wrong")
    }   
}   

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirm} = req.body
    try {
        const existingUser = await UserModel.findOne({email})
        if(existingUser) return res.status(400).json({ message: 'This user already exists'})
        if(password != confirm) return res.status(400).json({message: 'Passwords don\'t match'})
        const hashedPassword = bcrypt(password, 12)
        const result = await UserModel.create({firstName, lastName, email, password: hashedPassword})
        const token = jwt.sign({email: result.email, id: result._id}, process.env.SECRET, {expiresIn: '1h'})
        res.status(200).json({result, token})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }
}