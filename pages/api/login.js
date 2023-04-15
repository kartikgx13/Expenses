{/*import connect from "../../lib/mongodb";
import User from "../../model/schema";

connect()

//this function will handle the requests and the responses
export default async function handler(req,res){
  const {email,password}=req.body

  const user= await User.findOne({email,password})

  if (!user){
    return res.json({status:"Not able to find a user"})
  }
  else{
    res.redirect('/home')
  }
}*/}
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  const { email, password } = req.body;

  // Connect to MongoDB database
  const client = await connectToDatabase();
  const db = client.db("myFirstDatabase");

  // Find user with matching email and password
  const user = await db.collection('users').findOne({ email, password });

  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }
  else {
    res.status(301);
    res.setHeader('Location','/home');
    res.end();
    
  }
  // Return user details on successful login
  res.status(200).json({ user });
}