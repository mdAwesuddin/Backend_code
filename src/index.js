import router from './router.js';
import express from 'express';
import dotenv from 'dotenv'

dotenv.config();
const app2 =new AppExpress();
const app = express();
app.use(express.json());
app.use('/users', router);

const getRoutes = (request, response) => {
  response.json('hello');
};

app.get("/",getRoutes);

export default async (req, res) => {
  // Wrap the Express app to handle the request and response
  app(req, res);
};