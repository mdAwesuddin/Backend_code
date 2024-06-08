import dotenv from 'dotenv'
import { Client,Databases, Account, Users } from 'node-appwrite';
dotenv.config();

const client = new Client();
client
.setEndpoint(process.env.APPWRITE_ENDPOINT)
.setProject(process.env.APPWRITE_PROJECT_ID)
.setKey(process.env.APPWRITE_API_KEY); 

const databases = new Databases(client);
const account = new Account(client);
const users = new Users(client);

export { client, databases, account, users };
