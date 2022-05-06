import { validateField } from '.';

export const validateThreeFields = (digitableLine: string) => {
  const fieldOne = digitableLine.slice(0, 9);
  const fieldTwo = digitableLine.slice(10, 20);
  const fieldThree = digitableLine.slice(21, 31);
  const fieldOneVd = digitableLine[9];
  const fieldTwoVd = digitableLine[20];
  const fieldThreeVd = digitableLine[31];

  const module = 10;

  validateField(fieldOne, fieldOneVd, 1, module);
  validateField(fieldTwo, fieldTwoVd, 2, module);
  validateField(fieldThree, fieldThreeVd, 3, module);
};
