const express = require('express');
const dotenv = require('dotenv');
const router = require('./src/router');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/users', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
