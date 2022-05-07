import AppError from '~/infra/errors/app-errors';
import { moduleTen } from '../module-ten';

describe('moduleTen test suite', () => {
  test('should return true', () => {
    expect(moduleTen([2, 0, 0, 0, 0, 0, 0, 2, 6, 3, 8], 1, 1)).toBe(true);
  });

  test('should return an error informing verification digit is incorret', () => {
    let testError = new AppError(
      'bad Request',
      `Invalid verification digit of field: 1`,
      400,
      'badRequest'
    );

    expect(() => moduleTen([1, 1, 0, 0, 0, 9, 2, 1, 2], 2, 1)).toThrowError(
      testError as Error
    );
  });
});
