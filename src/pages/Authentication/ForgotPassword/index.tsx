import { AuthenticationContainer as Container } from '@/sections/Authentication/Container';

export const PageForgotPassword = () => {
  return (
    <Container back='sign-in' className='justify-center md:justify-start'>
      <h1 className='text-2xl text-center font-bold'>Forgot your password?</h1>
      <p className='text-center'>Enter your email address to reset your password.</p>
    </Container>
  );
};
