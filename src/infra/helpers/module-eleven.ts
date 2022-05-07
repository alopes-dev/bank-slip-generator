import AppError from '../errors/app-errors';

type Reducer = {
  value: number;
  counter: number;
};

export const moduleEleven = (
  array: number[],
  verifiedDigits?: number,
  fieldNumber?: number
) => {
  const reducer = (prev: Reducer, current: number): Reducer => {
    const { value, counter } = prev;
    const multipliedValue = current * counter;

    if (counter === 9) {
      return {
        value: multipliedValue + value,
        counter: 2,
      };
    }

    return {
      value: multipliedValue + value,
      counter: counter + 1,
    };
  };

  const reducedValue = array.reduce(reducer, { counter: 2, value: 0 }).value;

  const modules = reducedValue % 11;

  const digitSelfConference = 11 - modules;

  const isDacValid =
    digitSelfConference === 0 ||
    digitSelfConference === 10 ||
    digitSelfConference === 11;

  const isVerified =
    (!verifiedDigits && digitSelfConference) ||
    (verifiedDigits && digitSelfConference === verifiedDigits);

  if (isVerified) {
    if (isDacValid) return 1;
    return digitSelfConference;
  }

  throw new AppError(
    'Bad Request',
    `Invalid verification digit of field: ${fieldNumber}`,
    400,
    'badRequest'
  );
};
