import { BankSlipService } from '~/application/services';
import { BankSlipRepositroy } from '~/infra/respositories';
import { BankSlipRouter } from '~/presentation/routers/bank-slip-router';

export class BankSlipRouterComposer {
  static compose() {
    const bankSlipRepositroy = new BankSlipRepositroy();

    const bankSlipService = new BankSlipService(bankSlipRepositroy);

    return new BankSlipRouter(bankSlipService);
  }
}
