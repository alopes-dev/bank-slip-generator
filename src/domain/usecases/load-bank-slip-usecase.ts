import { LoadFunction } from '~/domain/common/types';

type BankSlipModel = {
  amount: string;
  expirationDate?: string;
  barCode: string;
};

export interface LoadBankSlipUseCase
  extends LoadFunction<LoadBankSlipUseCase.model, LoadBankSlipUseCase.params> {}

export namespace LoadBankSlipUseCase {
  export type model = BankSlipModel;
  export type params = {
    code: string;
  };
}
