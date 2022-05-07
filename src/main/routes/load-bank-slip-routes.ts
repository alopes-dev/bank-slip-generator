import { Router } from 'express';
import { LoadBankSlipRouterComposer } from '../composers';
import { ExpressRouterAdapter } from '../adapters';

export const route = (router: Router) => {
  router.get(
    '/boleto/:code',
    ExpressRouterAdapter.adapt(LoadBankSlipRouterComposer.compose())
  );
};
