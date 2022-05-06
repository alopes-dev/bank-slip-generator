export const addDays = (fullDate: string, days: number) => {
  const [date] = fullDate.split('T');
  const slicedDate = date.slice(1, 11);

  const result = new Date(slicedDate);

  result.setDate(result.getDate() + days);

  const stringifiedResult = JSON.stringify(result);

  const [dateResult] = stringifiedResult.split('T');

  return dateResult.slice(1, 11);
};
