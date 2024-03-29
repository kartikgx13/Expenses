import { use } from "react";
import connect from "../../lib/mongodb";
import User from "../../model/schema";
import { MongoClient } from "mongodb";
import bcrypt from 'bcrypt'

connect()

//this function will handle the requests and the responses
export default async function handler(req,res){
  const { email, password } = req.body;

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('myFirstDatabase');
  const collection = db.collection('users');
  const user = await collection.findOne({ email });

  if (user) {
    res.status(400).json({ message: 'Email already in use' });
    return;
  }

  //hashing the password
  const hashedPassword = await bcrypt.hash(password, 10)

  // Insert new user into database
  const result = await db.collection('users').insertOne({ email, password:hashedPassword });

  if (!result) {
    res.status(500).json({ message: 'Error registering user' });
    return;
  }

  res.status(201).json({ message: 'User registered successfully' });


}

{/*import { connectToDatabase } from '../../lib/mongodb';

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
}*/}