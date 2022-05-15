import AppError from '../errors/app-errors';
import { LoadBankSlipRepository } from './load-bank-slip-repository';

const validDigitableLine = '21290001192110001210904475617405975870000002000';

const makeSut = () => {
  return new LoadBankSlipRepository();
};

describe(LoadBankSlipRepository.name, () => {
  test('Should throw error of AppError instanceof if provide digitable line incorrectly', async () => {
    const sut = makeSut();
    try {
      const promise = await sut.load('invalid_DigitableLine');
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
    }
  });

  test('Should return bank slip info  if correct digitable line is provided', async () => {
    const sut = makeSut();
    const promise = await sut.load(validDigitableLine);

    expect(promise).toBeTruthy();
  });

  test('Should return bank slip info  if correct digitable line is provided 48 characters', async () => {
    const sut = makeSut();
    const promise = await sut.load('836200000021292600481009143530930013001904210760');

    expect(promise).toBeTruthy();
  });
});
