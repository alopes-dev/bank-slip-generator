import { Router } from 'express';
import { BankSlipRouterComposer } from '../composers';
import { ExpressRouterAdapter } from '../adapters';

export const route = (router: Router) => {
  router.get(
    '/boleto/:code',
    ExpressRouterAdapter.adapt(BankSlipRouterComposer.compose())
  );
};
