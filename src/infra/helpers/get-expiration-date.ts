import { addDays } from './add-days';

export const getExpirationDate = (expirationFactor: string) => {
  const baseDate = new Date('10-07-1997');

  const expirationDate = addDays(
    baseDate.toLocaleDateString(),
    Number(expirationFactor)
  );

  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(expirationDate));
};
