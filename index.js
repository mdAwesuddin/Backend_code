// import AppExpress from '@itznotabug/appexpress';
import router from './src/router.js';
import express from 'express';
import dotenv from './node_modules/dotenv'

dotenv.config();

const app = express();
app.use(express.json());
app.use('/users', router);

const getRoutes = (request, response) => {
  response.json('hello');
};

app.get("/",getRoutes);
