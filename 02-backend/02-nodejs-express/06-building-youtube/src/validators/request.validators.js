import { body } from "express-validator";

const registerValidatorSchema = () => {
  return [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLength({ min: 3 })
      .isLowercase(),
    body("email").trim().notEmpty("Email is required").isLength({ min: 5 }),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("password is required")
      .isLength({ min: 6 }),
  ];
};

const loginValidatorSchema = () => {
  return [
    body("email").trim().notEmpty("Email is required").isLength({ min: 5 }),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("password is required")
      .isLength({ min: 6 }),
  ];
};


export {
    registerValidatorSchema,
    loginValidatorSchema
};
