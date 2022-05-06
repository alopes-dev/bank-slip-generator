export default class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly name: string;

  constructor(
    typeError: string,
    message: string,
    statusCode: number,
    name: string
  ) {
    super(typeError ?? 'Unexcepted error');
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}
