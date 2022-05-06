import { BankSlipModel } from '~/infra/model';
import {
  validadeDigitableLine,
  barCodeGenerator,
  validateBarCode,
  getAmount,
  addDays,
} from '~/infra/helpers';

export class BankSlipRepositroy {
  async generator(digitableLine: string): Promise<BankSlipModel> {
    const digitableLineLength = validadeDigitableLine(digitableLine);
    const isValidLength = digitableLineLength === 47;

    if (isValidLength) {
      const barCode = barCodeGenerator(digitableLine);
      validateBarCode(barCode, digitableLineLength);

      const expirationFactor = barCode.slice(5, 9);

      const amount = getAmount(digitableLine);

      const baseDate = new Date('10-07-1997');
      const expirationDate = addDays(
        JSON.stringify(baseDate),
        Number(expirationFactor)
      );

      return {
        amount,
        expirationDate,
        barCode,
      };
    }

    const barCode = barCodeGenerator(digitableLine);
    console.log(barCode);
    validateBarCode(barCode, digitableLineLength);

    const amount = getAmount(digitableLine);

    return {
      amount,
      barCode,
    };
  }
}
