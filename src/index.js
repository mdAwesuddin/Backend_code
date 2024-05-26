import router from './router.js';
import express from 'express';
import dotenv from 'dotenv'
import AppExpress from "@itznotabug/appexpress";

dotenv.config();
const app2 =new AppExpress();
const app = express();
app.use(express.json());
app.use('/users', router);

const getRoutes = (request, response) => {
  response.json('hello');
};

app.get("/",getRoutes);

export default async (context) => await app2.attach(context);
