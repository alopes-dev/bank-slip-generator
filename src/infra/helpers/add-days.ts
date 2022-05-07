export const addDays = (date: string, days: number) => {
  const result = new Date(date);

  result.setDate(result.getDate() + days);

  const finalDate = result.toLocaleDateString();

  return finalDate;
};
