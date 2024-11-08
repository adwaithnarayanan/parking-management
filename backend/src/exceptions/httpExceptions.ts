export class HttpException extends Error {
  declare statusCode: number;

  constructor({
    message,
    statusCode,
  }: {
    message: string;
    statusCode: number;
  }) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
