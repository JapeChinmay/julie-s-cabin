import * as yup from "yup";

const passwordRegex = /^(.{5,})$/;

export const loginFomSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter Valid Email")
    .required("Please enter Email"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRegex)
    .required("Password is required"),
});
