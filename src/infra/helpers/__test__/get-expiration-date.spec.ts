import { getExpirationDate } from '../get-expiration-date';

describe(getExpirationDate.name, () => {
  test('should return expiration date exactly "2018-07-16"', () => {
    expect(getExpirationDate('7587')).toBe('2018-07-16');
  });
});
