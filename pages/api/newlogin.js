import { MongoClient } from 'mongodb';

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

  //res.status(200).json(user);
  res.redirect('/home')
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
}
