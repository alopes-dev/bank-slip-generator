import { LoadBankSlipUseCase } from '~/domain/usecases';
import { LoadBankSlipRepository } from '~/infra/respositories';

export class LoadBankSlipService implements LoadBankSlipUseCase {
  loadBankSlipRepository: LoadBankSlipRepository;

  constructor(loadBankSlipRepositroy: LoadBankSlipRepository) {
    this.loadBankSlipRepository = loadBankSlipRepositroy;
  }

  async execute(
    params: LoadBankSlipUseCase.params
  ): Promise<LoadBankSlipUseCase.model> {
    const result = await this.loadBankSlipRepository.load(params.code);

    return result;
  }
}
