class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = this.statusCode;

    Error.captureStackTrace(this, this.construtor);
  }
}
module.exports = ErrorHandler;
