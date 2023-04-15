{/*import connect from "../../lib/mongodb";
import User from "../../model/schema";

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
}*/}

import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  const { email, password } = req.body;

  // Connect to MongoDB database
  const client = await connectToDatabase();
  const db = client.db("myFirstDatabase");

  // Check if user with email already exists
  const userExists = await db.collection('users').findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'Email already in use' });
    return;
  }

  // Insert new user into database
  const result = await db.collection('users').insertOne({ email, password });

  if (!result) {
    res.status(500).json({ message: 'Error registering user' });
    return;
  }

  res.status(201).json({ message: 'User registered successfully' });
}