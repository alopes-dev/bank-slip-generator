import { getAmount } from '../get-amount';

describe(getAmount.name, () => {
  test(`getAmount test with type 47, should return ${1.0}`, () => {
    expect(getAmount('00190500954014481606906809350314337370000000100')).toBe(
      '1.00'
    );
  });
  test(`getAmount test with type 48`, () => {
    expect(getAmount('83620000002292600481001435309300100190421076')).toBe(
      '229.26'
    );
  });
});
