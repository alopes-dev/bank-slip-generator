import { LoadFunction } from '~/domain/common/types';

type BankSlipModel = {
  name: string;
};

export interface BankSlipUseCase
  extends LoadFunction<BankSlipUseCase.model, BankSlipUseCase.params> {}

export namespace BankSlipUseCase {
  export type model = BankSlipModel;
  export type params = {
    code: string;
  };
}
