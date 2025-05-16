import {User} from './schema.js';
import express from 'express';
const router = express.Router();


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

})

router.get('/message',async(req,res)=>{
    try {
        const {email} =req.body;
        if(!email)return res.status(400).json({ message: 'Email is required' });
        const users = await User.find({email});
        res.status(200).json({ message: 'Users retrieved successfully', users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving users', error });
    }
})

export default router;