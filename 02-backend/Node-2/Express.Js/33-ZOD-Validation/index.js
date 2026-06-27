// zod validation:
// npm i zod

import { loginSchema, registerSchema } from "./validator/validator";

export const register = (req, res) => {
  if (req.user) {
    return res.redirect("/");
  }

  const { data, error } = registerSchema.safeParse(req.body);

  if (error) {
    console.log(error);
    return res.redirect("/register");
  }

  console.log(data);
};

export const login = (req, res) => {
  if (req.user) {
    return register.redirect("/");
  }

  const { data, error } = loginSchema.safeParse(req.body);

  if (error) {
    console.log(error);
    return res.redirect("/register");
  }

  console.log(data);
};
