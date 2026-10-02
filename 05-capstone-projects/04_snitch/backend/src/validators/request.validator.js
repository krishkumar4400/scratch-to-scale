import { body, validationResult } from "express-validator";

export const validateRequest = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
};

export const validateRegisterUser = () => {
  return [
    body("fullName")
      .notEmpty()
      .withMessage("Full name is required")
      .isLength({ min: 3 }),
    body("email").isEmail().withMessage("Valid email is required"),
    body("contactNumber")
      .notEmpty()
      .withMessage("Contact number is required")
      .isLength({ min: 10, max: 10 })
      .matches(/^\d{10}$/)
      .withMessage("Contact number must be 10 digits"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
};
export const validateLoginUser = () => {
  return [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
};
