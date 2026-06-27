import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

const requestValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) =>
    extractedErrors.push({
      [err.path]: err.msg,
    }),
  );

  throw new ApiError(402, "Received data is not valid", extractedErrors);
};

export { requestValidation };
