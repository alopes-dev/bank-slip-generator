import { moduleEleven, moduleTen } from '.';

export const validateField = (
  field: string,
  vd: string,
  fieldNumber: number,
  module: number,
  currencyCode?: number,
) => {
  const toArray = Array.from(field);
  const numberArray = toArray.map(Number);
  const reverseArray = numberArray.reverse();

  if (module === 10 || currencyCode === 6 || currencyCode === 7) {
    moduleTen(reverseArray, Number(vd), fieldNumber);
  } else {
    moduleEleven(reverseArray, Number(vd), fieldNumber);
  }

  return true;
};
