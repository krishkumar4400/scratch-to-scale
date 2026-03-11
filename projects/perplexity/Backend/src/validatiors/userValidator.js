import { body } from "express-validator";

export const registerValidator = [
  body("username")
    .notEmpty()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Please enter a valid username"),
  body("email")
    .isEmail()
    .withMessage("Invalid email")
    .trim()
    .normalizeEmail()
    .withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .trim()
    .notEmpty()
    .withMessage("Password must be at least 6 characters"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
];
