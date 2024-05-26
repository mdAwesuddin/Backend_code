import AppExpress from '@itznotabug/appexpress';
import router from './src/router'
import dotenv from './node_modules/dotenv'

dotenv.config();

const app = AppExpress();
app.use(AppExpress.json());
app.use('/users', router);

const getRoutes = (request, response) => {
  response.json({ routes: ["Hello"] });
};

app.get("/",getRoutes);
