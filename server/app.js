// modules import
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/businessRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/businesses', router);

app.listen(8000);

export default app;
