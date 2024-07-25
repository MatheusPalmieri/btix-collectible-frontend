import * as yup from 'yup';

export const verifySchema = yup.object().shape({
  code: yup.string().required('Fill in the code field.'),
});

export type verifyProps = yup.InferType<typeof verifySchema>;
