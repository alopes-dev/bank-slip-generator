import AppError from '~/infra/errors/app-errors';
import { validateDigitableLine } from '../validate-digitable-line-code';

describe(validateDigitableLine.name, () => {
  test('should return 47 digitable line of 47 characters', () => {
    expect(
      validateDigitableLine('21290001192110001210904475617405975870000002000')
    ).toBe(47);
  });
  test('should return true digitable line of 48 characters', () => {
    expect(
      validateDigitableLine('846700000017435900240209024050002435842210108119')
    ).toBe(48);
  });

  test('should throw an error saying line length is incorrect digitable line of 50 characters', () => {
    let testError = new AppError(
      'bad Request',
      `Bank slip code must be 47 characters`,
      400,
      'badRequest'
    );

    expect(() =>
      validateDigitableLine(
        '84670000001743590024020902405000243584221010811900'
      )
    ).toThrowError(testError as Error);
  });

  test('should throw an error saying line length is incorrect digitable line of 46 characters', () => {
    let testError = new AppError(
      'bad Request',
      `Bank slip code must be 47 characters`,
      400,
      'badRequest'
    );

    expect(() =>
      validateDigitableLine('8467000000174359002402090240500024358422101081')
    ).toThrowError(testError as Error);
  });

  test(' should throw an error saying only numbers are allowed digitable line of non-number characters', () => {
    let testError = new AppError(
      'bad Request',
      'Invalid characters, Bank slip code must be only numbers',
      400,
      'badRequest'
    );

    expect(() =>
      validateDigitableLine('846700000017bd5900240209024050002435842210a08119')
    ).toThrowError(testError as Error);
  });
});
