import {User} from './schema.js';
import express from 'express';
const router = express.Router();


const register = async (req, res) => {

router.post('/create', async (req, res) => {
    const { name, email, description } = req.body;
    
    try {
        if(!name || !email || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newUser = new User({ name, email, description });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }

})}
export default register;