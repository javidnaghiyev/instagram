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
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET, { expiresIn: '1w'})
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
        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await UserModel.create({firstName, lastName, email, password: hashedPassword})
        const token = jwt.sign({email: result.email, id: result._id}, process.env.SECRET, {expiresIn: '1w'})
        res.status(200).json({result, token})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong'})
    }
}

export const getProfile = async (req, res) => {
    const { id: id } = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('We couldn\'t find this user')
    
        const user = await UserModel.findOne({id})
        res.json(user)
    } catch (error) {
        console.log(error);
    }   
}