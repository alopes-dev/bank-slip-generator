import {
  barCodeGenerator,
  getAmount,
  getExpirationDate,
  validateDigitableLine,
  validateBarCode,
  validateFourFields,
  validateThreeFields,
} from '~/infra/helpers';
import { LoadBankSlipRouter } from './load-bank-slip-router';

const validDigitableLine = '21290001192110001210904475617405975870000002000';

const makeBankSlipService = () => {
  class LoadBankSlipRepositorySpy {
    async load(code: string) {
      const dLineLength = validateDigitableLine(code);

      if (dLineLength) {
        validateThreeFields(code);
        const barCode = barCodeGenerator(code);
        validateBarCode(barCode, dLineLength);

        const expirationFactor = barCode.slice(5, 9);

        const amount = getAmount(code);

        const expirationDate = getExpirationDate(expirationFactor);

        return {
          barCode,
          amount,
          expirationDate,
        };
      }

      validateFourFields(code);

      const barCode = barCodeGenerator(code);

      validateBarCode(barCode, dLineLength);

      const amount = getAmount(barCode);

      const expirationFactor = barCode.slice(5, 9);

      return {
        barCode,
        amount,
      };
    }
  }

  class LoadBankSlipServiceSpy {
    loadBankSlipRepository: LoadBankSlipRepositorySpy;
    constructor(loadBankSlipRepository: LoadBankSlipRepositorySpy) {
      this.loadBankSlipRepository = loadBankSlipRepository;
    }
    async execute({ code }) {
      const result = await this.loadBankSlipRepository.load(code);
      return result;
    }
  }

  const loadBankSlipRepositorySpy = new LoadBankSlipRepositorySpy();

  const loadBankSlipServiceSpy = new LoadBankSlipServiceSpy(
    loadBankSlipRepositorySpy
  );
  return loadBankSlipServiceSpy;
};

const makeSut = () => {
  const bankSlipServiceSpy = makeBankSlipService();

  const sut = new LoadBankSlipRouter(bankSlipServiceSpy);

  return {
    sut,
    bankSlipServiceSpy,
  };
};

describe(LoadBankSlipRouter.name, () => {
  test('Should return status code 200 if digitable line is provided correctly', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        code: validDigitableLine,
      },
    };
    const httpResponse = await sut.route(httpRequest);

    expect(httpResponse.status).toBe(200);
  });

  test('Should return status code 400 if digitable line is provided incorrectly', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        code: validDigitableLine.slice(0, -1),
      },
    };
    const httpResponse = await sut.route(httpRequest);
    expect(httpResponse.status).toBe(400);
  });

  test('Should return status code 400 and Bank slip code is required if digitable is no provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        code: '',
      },
    };
    const httpResponse = await sut.route(httpRequest);

    expect(httpResponse.status).toBe(400);
    expect(httpResponse.body.error).toBe('Bank slip code is required');
  });

  test('Should return status code 400 and Bank slip code must be 47 characters if digitable line > 47 and < 48', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        code: validDigitableLine.slice(0, -1),
      },
    };
    const httpResponse = await sut.route(httpRequest);

    expect(httpResponse.status).toBe(400);
    expect(httpResponse.body.error).toBe(
      'Bank slip code must be 47 characters'
    );
  });

  test('Should return status code 400 and Invalid characters, Bank slip code must be only numbers message if digitable line is not a number', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        code: validDigitableLine.slice(0, -1) + 'u',
      },
    };
    const httpResponse = await sut.route(httpRequest);

    expect(httpResponse.status).toBe(400);
    expect(httpResponse.body.error).toBe(
      'Invalid characters, Bank slip code must be only numbers'
    );
  });

  test('Should return status code 400 and Invalid verification digit of field message', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        code: 1 + validDigitableLine.slice(0, -1),
      },
    };
    const httpResponse = await sut.route(httpRequest);

    expect(httpResponse.status).toBe(400);
    expect(httpResponse.body.error).toBe(
      `Invalid verification digit of field: ${validDigitableLine[0]}`
    );
  });
});
