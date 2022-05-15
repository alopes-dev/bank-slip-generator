import { LoadBankSlipService } from './load-bank-slip-service';

const validDigitableLine = '21290001192110001210904475617405975870000002000';

const expectationValue = {
  barCode: '12345678901234567890123456789012345678901234567890',
  amount: '100.00',
  expirationDate: '2021-01-01',
}

const makeBankSlipRepositorySpy = () => {
  class LoadBankSlipRepositorySpy {
    async load(code: string) {
      if(code === 'invalid') return
      return expectationValue;
    }
  }

  return new LoadBankSlipRepositorySpy();
};

const makeSut = () => {
  const loadBankSlipRepositorySpy = makeBankSlipRepositorySpy();

  const sut = new LoadBankSlipService(loadBankSlipRepositorySpy);

  return {
    sut,
    loadBankSlipRepositorySpy,
  };
};

describe(LoadBankSlipService.name, () => {
  test('Should return expected value', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        code: validDigitableLine,
      },
    };
    const response = await sut.execute({code: validDigitableLine});

    expect(response).toStrictEqual(expectationValue);
  });

  test('Should return throw any error if value is not valid', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        code: validDigitableLine,
      },
    };
    const response = await sut.execute({code: 'invalid'});

    expect(response).toBeUndefined();
  });
});
