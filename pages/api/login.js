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


  // Connect to MongoDB database

  const { email, password } = req.body;

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('myFirstDatabase');
  const collection = db.collection('users');
  const user = await collection.findOne({ email,password });

  if (!user || user.password !== password) {
    res.status(401).json({ message: 'Invalid email or password' });
    return;
  } else {
    res.status(301);
    res.setHeader('Location','/home');
    res.end();
    
  }
  if (!user.email) {
    res.status(400).json({ message: 'Email not found' });
    return;
  }
  res.status(200).json({user});
  // Return user details on successful login
  //res.status(200).json({ user });
}