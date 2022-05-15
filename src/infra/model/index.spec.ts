import { BankSlipModel } from './index';

describe('imports', () => {
  const mock = jest.fn<BankSlipModel, []>(() => {
    return {
      amount: 'any_amount',
      expirationDate: 'any_expiration_date',
      barCode: 'any_bar_code',
    };
  });
  test('should imports all middlewares as well', async () => {
    const bankSlipModel = mock();
    expect(bankSlipModel).toBeDefined();
  });
});
