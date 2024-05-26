import router from './src/router'
import dotenv from './node_modules/dotenv'
import AppExpress from '@itznotabug/appexpress';

dotenv.config();

const app = new AppExpress();
app.use((req, res, next) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        try {
            req.body = JSON.parse(data);
            next();
        } catch (error) {
            res.status(400).json({ error: 'Invalid JSON' });
        }
    });
});app.use('/users', router);

const getRoutes = (request, response) => {
  response.json({ routes: ["Hello"] });
};

app.get("/",getRoutes);
