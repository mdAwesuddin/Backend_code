// import AppExpress from '@itznotabug/appexpress';
import router from './router.js';
import express from 'express';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(express.json());
app.use('/users', router);

const getRoutes = (request, response) => {
  response.json('hello');
};

app.get("/",getRoutes);

export default async (context) => await app.attach(context);