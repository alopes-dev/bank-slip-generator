import { BankSlipUseCase } from '~/domain/usecases';
import { BankSlipRepositroy } from '~/infra/respositories';

export class BankSlipService implements BankSlipUseCase {
  bankSlipRepositroy: BankSlipRepositroy;

  constructor(bankSlipRepositroy: BankSlipRepositroy) {
    this.bankSlipRepositroy = bankSlipRepositroy;
  }

  async execute(
    params: BankSlipUseCase.params
  ): Promise<BankSlipUseCase.model> {
    const result = await this.bankSlipRepositroy.generator(params.code);

    return result;
  }
}
