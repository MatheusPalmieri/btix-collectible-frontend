import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email.")
    .required("Fill in the email field."),
  password: yup.string().required("Fill in the password field."),
});

export type signInProps = yup.InferType<typeof signInSchema>;
