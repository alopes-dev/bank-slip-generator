import request from 'supertest';
import app from '../config/app';

const validDigitableLine = '21290001192110001210904475617405975870000002000';

const makeSut = async (code?: string) => {
  const sut = await request(app).get(`/api/boleto/${code}`);

  return sut.body;
};
describe('route.name', () => {
  beforeAll(async () => {
    jest.resetModules();
  });

  test('Should return 400 when invalid credentials are provided', async () => {
    await request(app).get('/api/boleto/1212').expect(400);
  });

  test('Should return status code 400 if digitable line is provided incorrectly', async () => {
    const code = validDigitableLine.slice(0, -1);
    const sut = await makeSut(code);

    expect(sut.status).toBe(400);
  });

  test('Should return status code 400 and Invalid verification digit of field message', async () => {
    const code = 1 + validDigitableLine.slice(0, -1);
    const sut = await makeSut(code);

    expect(sut.status).toBe(400);
    expect(sut.body.error).toBe(
      `Invalid verification digit of field: ${validDigitableLine[0]}`
    );
  });

  test('Should return status code 400 and Bank slip code must be 47 characters if digitable line > 47 and < 48', async () => {
    const code = validDigitableLine.slice(0, -1);
    const sut = await makeSut(code);

    expect(sut.status).toBe(400);
    expect(sut.body.error).toBe('Bank slip code must be 47 characters');
  });

  test('Should return status code 400 and Invalid characters, Bank slip code must be only numbers message if digitable line is not a number', async () => {
    const code = validDigitableLine.slice(0, -1) + 'u';
    const sut = await makeSut(code);

    expect(sut.status).toBe(400);
    expect(sut.body.error).toBe(
      'Invalid characters, Bank slip code must be only numbers'
    );
  });
});
