import { LoadBankSlipService } from '~/application/services';
import AppError from '~/infra/errors/app-errors';
import { HttpResponse } from '~/presentation/helpers/http-response';
import { HttpRequest } from '~/presentation/helpers/http-resquest';

type BankSlipParams = {
  code: string;
};

export class LoadBankSlipRouter {
  loadBankSlipService: LoadBankSlipService;

  constructor(loadBankSlipService: LoadBankSlipService) {
    this.loadBankSlipService = loadBankSlipService;
  }

  async route(httpRequest: HttpRequest<BankSlipParams>) {
    try {
      const { code } = httpRequest.params;

      const response = await this.loadBankSlipService.execute({ code });

      return HttpResponse.ok(response);
    } catch (error) {
      if (error instanceof AppError) {
        return HttpResponse[error.name](error);
      }

    }
  }
}
