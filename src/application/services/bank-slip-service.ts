import { BankSlipUseCase } from '~/domain/usecases';

export class BankSlipService implements BankSlipUseCase {
  constructor() {}

  async execute(
    params: BankSlipUseCase.params
  ): Promise<BankSlipUseCase.model> {
    console.log(this);
    const result = await new Promise((resolve) => {}).then(() => {
      return {
        name: 'BankSlip',
      };
    });

    return result;
  }
}
