const express = require('@itznotabug/appexpress');
const dotenv = require('dotenv');
const router = require('./src/router');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/users', router);

const getRoutes = (request, response) => {
  response.json({ routes: ["Hello"] });
};

app.get("/",getRoutes);
