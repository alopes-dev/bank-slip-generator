import { addDays } from '../add-days';

describe(addDays.name, () => {
  test('should return "7/16/2018" after added days', () => {
    const baseDate = new Date('10-07-1997');
    expect(addDays(baseDate.toLocaleDateString(), 7587)).toBe('7/16/2018');
  });
});
