import { BankSlipModel } from '~/infra/model';
import { validadeBankSlipCode, barCodeGenerator } from '~/infra/helpers';

export class BankSlipRepositroy {
  async generator(code: string): Promise<BankSlipModel> {
    const codeLength = validadeBankSlipCode(code);
    const isValidLength = codeLength === 47;

    if (isValidLength) {
      const barCode = barCodeGenerator(code);

      console.log(barCode);

      return {
        name: '',
        amount: 0,
        expirationDate: '',
        barCode,
      };
    }

    return {
      name: 'code',
      amount: 100,
      barCode: '123456789',
    };
  }
}
