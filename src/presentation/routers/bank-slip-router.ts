import { BankSlipService } from '~/application/services';
import AppError from '~/infra/errors/app-errors';
import { HttpResponse } from '~/presentation/helpers/http-response';
import { HttpRequest } from '~/presentation/helpers/http-resquest';

type BankSlipParams = {
  code: string;
};

export class BankSlipRouter {
  bankSlipService: BankSlipService;

  constructor(bankSlipService: BankSlipService) {
    this.bankSlipService = bankSlipService;
  }

  async route(httpRequest: HttpRequest<BankSlipParams>) {
    try {
      const { code } = httpRequest.params;

      const bankSlip = await this.bankSlipService.execute({ code });

      return HttpResponse.ok({ bankSlip });
    } catch (error) {
      if (error instanceof AppError) {
        return HttpResponse[error.name](error);
      }
      return HttpResponse.serverError();
    }
  }
}
