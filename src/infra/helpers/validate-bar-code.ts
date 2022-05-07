import AppError from '../errors/app-errors';
import { moduleEleven } from './module-eleven';
import { moduleTen } from './module-ten';
import { getBarCode } from './get-bar-code';
export const validateBarCode = (code: string, codeLength: number) => {
  if (codeLength === 47) {
    const { barCode, barCodeVerification } = getBarCode(code, 4);

    const toArray = Array.from(barCode);
    const stringArrayToNumberArray = toArray.map(Number);
    const reverseNumberArray = stringArrayToNumberArray.reverse();
    const verificationDigit = moduleEleven(reverseNumberArray);

    if (verificationDigit !== barCodeVerification) {
      throw new AppError(
        'Bad Request',
        'Invalid bar code verification digit',
        400,
        'badRequest'
      );
    }

    return true;
  }

  const { barCode, barCodeVerification } = getBarCode(code, 3);

  const toArray = Array.from(barCode);
  const stringArrayToNumberArray = toArray.map(Number);
  const reverseNumberArray = stringArrayToNumberArray.reverse();

  moduleTen(reverseNumberArray, barCodeVerification);

  return true;
};
