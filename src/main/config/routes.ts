import { Router, Express } from 'express';

import fg from 'fast-glob';

const router = Router();

const setupRouter = (app: Express) => {
  app.use('/api', router);
  fg.sync('**/src/main/routes/**routes.ts').forEach((file) =>
    require(`../../../${file}`).route(router)
  );
};

export default setupRouter;
