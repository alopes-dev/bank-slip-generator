import { Express } from 'express';
import { cors, jsonParser, contentType } from '../middlewares';

const setupApp = (app: Express) => {
  app.disable('x-powered-by');
  app.use(cors);
  app.use(jsonParser);
  app.use(contentType);
};

export default setupApp;
