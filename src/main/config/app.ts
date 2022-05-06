import express from 'express';

import setupApp from './setup';
import setupRouter from './routes';

const app = express();

setupApp(app);
setupRouter(app);

export default app;
