import { BankSlipModel } from '~/infra/model';
import {
  validateDigitableLine,
  barCodeGenerator,
  validateBarCode,
  getAmount,
  addDays,
  getExpirationDate,
  validateThreeFields,
  validateFourFields,
} from '~/infra/helpers';

export class LoadBankSlipRepository {
  async load(digitableLine: string): Promise<BankSlipModel> {
    const digitableLineLength = validateDigitableLine(digitableLine);
    const isValidLength = digitableLineLength === 47;

    if (isValidLength) {
      validateThreeFields(digitableLine);
      const barCode = barCodeGenerator(digitableLine);
      validateBarCode(barCode, digitableLineLength);

      const expirationFactor = barCode.slice(5, 9);

      const amount = getAmount(digitableLine);

      const expirationDate = getExpirationDate(expirationFactor);

      return {
        barCode,
        amount,
        expirationDate,
      };
    }

    validateFourFields(digitableLine);

    const barCode = barCodeGenerator(digitableLine);

    validateBarCode(barCode, digitableLineLength);

    const amount = getAmount(barCode);

    const expirationFactor = barCode.slice(5, 9);

    return {
      barCode,
      amount,
    };
  }
}
