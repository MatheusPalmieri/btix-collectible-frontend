import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Fill in the name field."),
  email: yup
    .string()
    .email("Invalid email.")
    .required("Fill in the email field."),
  password: yup.string().required("Fill in the password field."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Fill in the password confirmation field."),
});

export type signUpProps = yup.InferType<typeof signUpSchema>;
