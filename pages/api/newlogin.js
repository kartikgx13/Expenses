import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return handleGetRequest(req, res);
    case 'POST':
      return handlePostRequest(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function handleGetRequest(req, res) {
  const { email } = req.query;

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('myFirstDatabase');
  const collection = db.collection('users');
  const user = await collection.findOne({ email });

  res.status(200).json(user);
  return;
}

async function handlePostRequest(req, res) {
  const { email, password } = req.body;

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('myFirstDatabase');
  const collection = db.collection('users');
  const user = await collection.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email' })
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid password' })
  }
  else{
  res.status(301);
  res.setHeader('Location','/dashboard');
  res.end();
  }

    
}
