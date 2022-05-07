import AppError from '~/infra/errors/app-errors';
import { moduleEleven } from '../module-eleven';

describe(moduleEleven.name, () => {
  test('should return 9', () => {
    expect(
      moduleEleven([
        0, 4, 7, 1, 6, 5, 7, 4, 4, 0, 0, 1, 2, 1, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0,
        0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 7, 8, 5, 7, 9, 2, 1, 2,
      ])
    ).toBe(9);
  });

  test('should return an error informing verification digit is incorret', () => {
    let testError = new AppError(
      'bad Request',
      `Invalid verification digit of field: 2`,
      400,
      'badRequest'
    );

    expect(() => moduleEleven([84670010002], 7, 2)).toThrowError(
      testError as Error
    );
  });
});
