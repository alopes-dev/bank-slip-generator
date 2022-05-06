import { validateField } from '.';

export const validateFourFields = (digitableLine: string) => {
  const fieldOne = digitableLine.slice(0, 11);
  const fieldTwo = digitableLine.slice(12, 23);
  const fieldThree = digitableLine.slice(24, 35);
  const fieldFour = digitableLine.slice(36, 47);

  const fieldOneVd = digitableLine.slice(11, 12);
  const fieldTwoVd = digitableLine.slice(23, 24);
  const fieldThreeVd = digitableLine.slice(35, 36);
  const fieldFourVd = digitableLine.slice(47, 48);

  const currencyCode = Number(digitableLine[2]);

  const module = 11;

  validateField(fieldOne, fieldOneVd, 1, module, currencyCode);
  validateField(fieldTwo, fieldTwoVd, 2, module, currencyCode);
  validateField(fieldThree, fieldThreeVd, 3, module, currencyCode);
  validateField(fieldFour, fieldFourVd, 4, module, currencyCode);
};
