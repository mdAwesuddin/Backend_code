const dotenv = require('dotenv');
const AppExpress = require('@itznotabug/appexpress');
const router = require('./src/router.js');

dotenv.config();

const app = AppExpress();
app.use(AppExpress.json());
app.use('/users', router);

const getRoutes = (request, response) => {
  response.json({ routes: ["Hello"] });
};

app.get("/", getRoutes);

// Export the app if needed
module.exports = app;
