import AppError from '../errors/app-errors';
import { checkIfIsNumberOnly } from './check-if-numbers-only';

export const validadeDigitableLine = (digitableLine: string): number => {
  const digitableLineLength = digitableLine.length;

  const isNotValid = digitableLineLength < 47 || digitableLineLength > 48;

  if (!digitableLine) {
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

  if (!checkIfIsNumberOnly(digitableLine)) {
    throw new AppError(
      'Bad Request',
      'Invalid characters, Bank slip code must be only numbers',
      400,
      'badRequest'
    );
  }

  return digitableLineLength;
};
