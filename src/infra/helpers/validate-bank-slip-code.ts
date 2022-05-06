import AppError from '../errors/app-errors';
import { checkIfIsNumberOnly } from './check-if-numbers-only';

export const validadeBankSlipCode = (bankSlipCode: string): number => {
  const codeLength = bankSlipCode.length;

  const isNotValid = codeLength < 47 || codeLength > 48;

  if (!bankSlipCode) {
    throw new AppError(
      'Bad Request',
      'Bank slip code is required',
      400,
      'badRequest'
    );
  }

  if (isNotValid) {
    throw new AppError(
      'Bad Request',
      'Bank slip code must be 47 characters',
      400,
      'badRequest'
    );
  }

  if (!checkIfIsNumberOnly(bankSlipCode)) {
    throw new AppError(
      'Bad Request',
      'Invalid characters, Bank slip code must be only numbers',
      400,
      'badRequest'
    );
  }

  return codeLength;
};
