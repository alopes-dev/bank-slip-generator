import AppError from '~/infra/errors/app-errors';
import { validateField } from '../validate-field';

describe(validateField.name, () => {
  test('should return 47 digitable line of 47 characters', () => {
    expect(validateField('84221010811', '9', 4, 11, 6)).toBe(true);
  });
  test('should return true digitable line of 48 characters', () => {
    let testError = new AppError(
      'bad Request',
      `Invalid verification digit of field: 1`,
      400,
      'badRequest'
    );
    expect(() => validateField('212900011', '2', 1, 10)).toThrowError(
      testError as Error
    );
  });
});
