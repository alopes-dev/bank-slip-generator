import { LoadBankSlipService } from '~/application/services';
import { LoadBankSlipRepository } from '~/infra/respositories';
import { LoadBankSlipRouter } from '~/presentation/routers/load-bank-slip-router';

export class LoadBankSlipRouterComposer {
  static compose() {
    const loadBankSlipRepository = new LoadBankSlipRepository();

    const bankSlipService = new LoadBankSlipService(loadBankSlipRepository);

    return new LoadBankSlipRouter(bankSlipService);
  }
}
