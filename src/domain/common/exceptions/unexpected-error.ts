export class UnexpectedError extends Error {
  constructor(message?: string) {
    super('UnexpectedError');
    this.name = 'UnexpectedError';
    this.message = message ?? 'exceptions:UNEXPECTED_ERROR';
  }
}
