import * as yup from "yup";

const firstName = yup.string().required();
const lastName = yup.string().required();
const email = yup
  .string()
  .required()
  .email();

const password = yup.string().required();

export const LOGIN_VALIDATION_SCHEMA = yup.object().shape({
  email,
  password
});

export const REGISTER_VALIDATION_SCHEMA = yup.object().shape({
  firstName,
  lastName,
  email,
  password
});
