import { body } from "express-validator";
import { AvailableUserRoles } from "../utils/constants.js";

const registerRequestValidationSchema = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid Email"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long")
      .isString(),
    body("role")
      .trim()
      .optional()
      .isLength({ min: 4 })
      .withMessage("Invalid role")
      .isIn(AvailableUserRoles),
  ];
};

const loginRequestValidationSchema = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid Email"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long")
      .isString(),
    body("role")
      .trim()
      .optional()
      .isLength({ min: 4 })
      .withMessage("Invalid role")
      .isIn(AvailableUserRoles),
  ];
};


export { registerRequestValidationSchema, loginRequestValidationSchema };