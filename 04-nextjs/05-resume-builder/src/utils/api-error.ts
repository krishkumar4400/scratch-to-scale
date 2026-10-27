class ApiError extends Error {
  statusCode: number;
  success: boolean;
  data: null;
  errors: string[];

  constructor(statusCode: number, message: string, errors: string[] = []) {
    super(message);

    this.name = "ApiError";
    this.statusCode = statusCode;
    this.success = false;
    this.data = null;
    this.errors = errors;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default ApiError;
