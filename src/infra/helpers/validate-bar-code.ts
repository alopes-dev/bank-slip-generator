import AppError from '../errors/app-errors';
import { moduleEleven } from './module-eleven';
import { moduleTen } from './module-ten';
export const validateBarCode = (code: string, codeLength: number) => {
  if (codeLength === 47) {
    const barCodeVerification = code[4];
    const barCode = code.slice(0, 4) + code.slice(5, 44);
    const toArray = Array.from(barCode);
    const stringArrayToNumberArray = toArray.map(Number);
    const reverseNumberArray = stringArrayToNumberArray.reverse();
    const verificationDigit = moduleEleven(reverseNumberArray);

    if (verificationDigit !== Number(barCodeVerification)) {
      throw new AppError(
        'Bad Request',
        'Invalid bar code verification digit',
        400,
        'badRequest'
      );
    }

    return true;
  }

  const barCodeVerification = Number(code[3]);

  const barCode = code.slice(0, 3) + code.slice(4, 44);

  const toArray = Array.from(barCode);
  const stringArrayToNumberArray = toArray.map(Number);
  const reverseNumberArray = stringArrayToNumberArray.reverse();

  moduleTen(reverseNumberArray, barCodeVerification);

  return true;
};
