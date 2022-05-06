import { checkEven } from './check-even';
import AppError from '../errors/app-errors';

export const moduleTen = (
  numberArray: number[],
  vd: number,
  fieldNumber?: number
) => {
  const reducedValue = numberArray.reduce(
    (prev: number, current: number, index: number) => {
      const isIndexEven = checkEven(index);

      const currentMultipled = isIndexEven ? current * 2 : current * 1;

      if (currentMultipled > 9) {
        const [firstValue, SecondValue] = currentMultipled.toString().split('');

        const sumsOfFirstValues = Number(firstValue) + Number(SecondValue);

        return prev + sumsOfFirstValues;
      }

      return prev + currentMultipled;
    },
    0
  );

  const modules = reducedValue % 10;
  let digitSelfConference = 10 - modules;

  if (digitSelfConference === 10) {
    digitSelfConference = 0;
  }
  console.log(digitSelfConference, Number(vd));

  if (!fieldNumber && digitSelfConference === Number(vd)) {
    return digitSelfConference;
  } else if (!fieldNumber && digitSelfConference !== Number(vd)) {
    throw new AppError(
      'Bad Request',
      `Invalid general verification digit`,
      400,
      'badRequest'
    );
  }
  if (digitSelfConference !== Number(vd)) {
    throw new AppError(
      'Bad Request',
      `Invalid verification digit of field: ${fieldNumber}`,
      400,
      'badRequest'
    );
  }
  return true;
};
