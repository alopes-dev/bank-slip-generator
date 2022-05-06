import { ServerError } from '~/presentation/errors';

export class HttpResponse {
  static ok(body) {
    return {
      statusCode: 200,
      body,
    };
  }

  static badRequest(error: Error) {
    return {
      statusCode: 400,
      body: {
        ...error,
        error: error.message,
      },
    };
  }

  static serverError() {
    return {
      statusCode: 500,
      body: {
        error: new ServerError().message,
      },
    };
  }
}
