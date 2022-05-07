import { checkEven } from '../check-even';
describe(checkEven.name, () => {
  test('Is even test, should return true', () => {
    expect(checkEven(2)).toBe(true);
  });
  test(`Isn't even test, should return false`, () => {
    expect(checkEven(3)).toBe(false);
  });
});
