import connect from "../../lib/mongodb";
import User from "../../model/schema";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connect()

//this function will handle the requests and the responses
export default async function handler(req,res){
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }

      // Hash password
      

      // Create new user
      const newUser = new User({ email, password });
      await newUser.save();

      // Generate token

      // Return user data and token
      res.status(201).json({ user: newUser});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}