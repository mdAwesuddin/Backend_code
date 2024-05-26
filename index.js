import AppExpress from '@itznotabug/appexpress';
import router from './src/router.js';


const app =new AppExpress();
app.use(AppExpress.json());
app.use('/users', router);

const getRoutes = (request, response) => {
  response.json({ routes: ["Hello"] });
};

app.get("/",getRoutes);
