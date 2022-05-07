import { moduleEleven } from './module-eleven';
import { moduleTen } from './module-ten';
export const validateField = (
  field: string,
  verifiedDigits: string,
  fieldNumber: number,
  module: number,
  currencyCode?: number
) => {
  const fieldToArray = Array.from(field);
  const numberArray = fieldToArray.map(Number);
  const reverseNumberArray = numberArray.reverse();
  const verifiedDigitsParsed = Number(verifiedDigits);

  const isValid = module === 10 || currencyCode === 6 || currencyCode === 7;

  if (isValid) {
    moduleTen(reverseNumberArray, verifiedDigitsParsed, fieldNumber);
  } else {
    moduleEleven(reverseNumberArray, verifiedDigitsParsed, fieldNumber);
  }

  return true;
};
