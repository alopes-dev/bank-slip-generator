import { validateField } from './validate-field';

export const validateFourFields = (digitableLine: string) => {
  const module = 11;
  const currencyCode = Number(digitableLine[2]);
  const fieldOne = digitableLine.slice(0, 11);
  const fieldTwo = digitableLine.slice(12, 23);
  const fieldThree = digitableLine.slice(24, 35);
  const fieldFour = digitableLine.slice(36, 47);

  const fieldOneDigitVerified = digitableLine.slice(11, 12);
  const fieldTwoDigitVerified = digitableLine.slice(23, 24);
  const fieldThreeDigitVerified = digitableLine.slice(35, 36);
  const fieldFourDigitVerified = digitableLine.slice(47, 48);

  validateField(fieldOne, fieldOneDigitVerified, 1, module, currencyCode);
  validateField(fieldTwo, fieldTwoDigitVerified, 2, module, currencyCode);
  validateField(fieldThree, fieldThreeDigitVerified, 3, module, currencyCode);
  validateField(fieldFour, fieldFourDigitVerified, 4, module, currencyCode);
};
