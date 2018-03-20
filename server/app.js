// modules import
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import YAML from 'yamljs';
import router from './routes/businessRoutes';
import userRoute from './routes/userRoutes';

const app = express();
const swaggerDocument = YAML.load(`${process.cwd()}/swagger.yaml`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1/businesses', router);
app.use('/api/v1/auth', userRoute);

app.listen(8000);

export default app;
