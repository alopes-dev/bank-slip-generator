import { Router } from 'express';

// const { adapt } = require('../adapters/express-router-adapter');
// const LoginRouterComposer = require('../composers/login-router-composer');

export const route = (router: Router) => {
  router.get('/boleto', (req, res) => {
    res.send('Boleto');
  });
};
