import { Request, Response } from 'express';

export class ExpressRouterAdapter {
  static adapt(router) {
    return async (req: Request, res: Response) => {
      const httpRequest = {
        params: req.params,
        body: req.body,
      };

      const httpResponse = await router.route(httpRequest);
      res.status(httpResponse.status).json(httpResponse);
    };
  }
}
