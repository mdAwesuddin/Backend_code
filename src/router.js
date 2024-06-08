// import AppExpress from '@itznotabug/appexpress';
import { ID } from 'node-appwrite';
import { databases,account } from './appwrite.js';
// import express from 'express';
import AppExpress from "@itznotabug/appexpress";

// const router =express.Router();
const router = new AppExpress.Router();

const postUser =async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Create a new user
    const user = await account.create(ID.unique(), email, password, name);
console.log(user.password)
    // Add user to the database collection
    await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID, 
      process.env.APPWRITE_COLLECTION_ID, 
      ID.unique(), 
      {
        userId: user.$id,
        email: user.email,
        name: user.name,
        password: password 
      }
    );

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login User
const getUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user document from the database using the email
    const query = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_COLLECTION_ID,
      [`email=${email}`]
    );

    if (query.documents.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const userDocument = query.documents[0];

    // Check if the provided password matches the stored password
    if (userDocument.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create a session for the user
    const session = await account.createEmailSession(email, password);

    res.json({ session });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

router.post('/register', postUser);
router.post('/login', getUser);

export default router;
