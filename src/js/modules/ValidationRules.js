import * as yup from "yup";

export const emailRule = yup
  .string()
  .email("Incorrect")
  .max(255)
  .required("Email is required");
export const nameRule = yup
  .string()
  .required("Name is required")
  .matches(/^[a-zA-Zа-яА-Я_ ]{3,25}$/i, "Incorrect")
  .min(2, "Name is required");
export const phoneRule = yup
  .string()
  .required("Phone is required")
  .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, "Incorrect")
  .min(2, "Phone is required");
export const checkboxRule = yup
  .boolean()
  .required()
  .oneOf([true], "Checkbox is required");
