import AppError from '../errors/app-errors';

type Reducer = {
  value: number;
  counter: number;
};

export const moduleEleven = (
  array: number[],
  vd?: number,
  fieldNumber?: number
) => {
  const reducer = (prev: Reducer, current: number): Reducer => {
    const { value, counter } = prev;
    const multipliedAmount = current * counter;

    if (counter === 9) {
      return {
        value: multipliedAmount + value,
        counter: 2,
      };
    }

    return {
      value: multipliedAmount + value,
      counter: counter + 1,
    };
  };

  const reducedValue = array.reduce(reducer, { counter: 2, value: 0 }).value;

  const modules = reducedValue % 11;

  let digitSelfConference = 11 - modules;

  const isDacValid =
    digitSelfConference === 0 ||
    digitSelfConference === 10 ||
    digitSelfConference === 11;

  if (isDacValid) {
    digitSelfConference = 1;
  }

  if (!vd && digitSelfConference) {
    return digitSelfConference;
  }

  if (vd && digitSelfConference === Number(vd)) {
    return digitSelfConference;
  } else {
    throw new AppError(
      'Bad Request',
      `Invalid verification digit of field: ${fieldNumber}`,
      400,
      'badRequest'
    );
  }
};
