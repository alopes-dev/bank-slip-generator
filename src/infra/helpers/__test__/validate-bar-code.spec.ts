import { validateBarCode } from '../validate-bar-code';

describe(validateBarCode.name, () => {
  test('should return true digitable line of 47 characters', () => {
    expect(
      validateBarCode('21299758700000020000001121100012100447561740', 47)
    ).toBe(true);
  });
  test('should return true digitable line of 48 characters', () => {
    expect(
      validateBarCode('84670000001435900240200240500024384221010811', 48)
    ).toBe(true);
  });
});
