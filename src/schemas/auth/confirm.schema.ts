import * as yup from 'yup';

export const confirmSchema = yup.object().shape({
  code: yup.string().required('Fill in the code field.'),
});

export type confirmProps = yup.InferType<typeof confirmSchema>;
