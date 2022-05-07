export class HttpResponse {
  static ok(body) {
    return {
      status: 200,
      body,
    };
  }

  static badRequest(error: Error) {
    return {
      status: 400,
      body: {
        name: error.name,
        error: error.message,
      },
    };
  }
}
