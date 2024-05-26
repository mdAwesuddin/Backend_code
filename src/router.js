// import AppExpress from '@itznotabug/appexpress';
import { ID } from 'node-appwrite';
import { databases,account } from './appwrite.js';
import express from 'express';

const router =express.Router();

router.post('/register', async (req, res) => {
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
        password: password // Store password in plaintext (not recommended)
      }
    );

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create a session for the user
    const session = await account.createEmailSession(email, password);

    res.json({ session });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

export default router;
