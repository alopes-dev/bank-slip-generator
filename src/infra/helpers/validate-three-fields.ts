import { validateField } from './validate-field';

export const validateThreeFields = (digitableLine: string) => {
  const module = 10;
  const fieldOne = digitableLine.slice(0, 9);
  const fieldTwo = digitableLine.slice(10, 20);
  const fieldThree = digitableLine.slice(21, 31);

  const fieldOneDigitVerified = digitableLine[9];
  const fieldTwoDigitVerified = digitableLine[20];
  const fieldThreeDigitVerified = digitableLine[31];

  validateField(fieldOne, fieldOneDigitVerified, 1, module);
  validateField(fieldTwo, fieldTwoDigitVerified, 2, module);
  validateField(fieldThree, fieldThreeDigitVerified, 3, module);
};
