import { barCodeGenerator } from '../bar-code-generator';
import { getBarCode } from '../get-bar-code';

describe(getBarCode.name, () => {
  test('It should return "2129758700000020000001121100012100447561740" for digitable line 21290001192110001210904475617405975870000002000 of length 47)', () => {
    const barCode = barCodeGenerator(
      '21290001192110001210904475617405975870000002000'
    );

    expect(getBarCode(barCode, 4).barCode).toBe(
      '2129758700000020000001121100012100447561740'
    );
  });
  test('It should return "8360000002292600481001435309300100190421076" for digitable line 836200000021292600481009143530930013001904210760 of length 48)', () => {
    const barCode = barCodeGenerator(
      '836200000021292600481009143530930013001904210760'
    );
    expect(getBarCode(barCode, 3).barCode).toBe(
      '8360000002292600481001435309300100190421076'
    );
  });
});
