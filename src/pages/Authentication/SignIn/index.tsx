import { Container } from '@/components/Container';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/contexts/auth';
import { signInProps, signInSchema } from '@/schemas/auth/sign-in.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { Info } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const PageSignIn = () => {
  const { signIn } = useAuthStore();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<signInProps>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<signInProps> = async (credentials: signInProps) => {
    try {
      setIsLoading(true);
      await signIn(credentials);
      navigate('/');
    } catch (error: AxiosError | any) {
      const { message } = error.response.data;
      if (message === 'INVALID_USER') {
        setError('Email or password is incorrect. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container flex>
      <h1 className='text-2xl text-center font-bold'>Sign in to your account</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='collectible@btix.app' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='********' {...field} />
                </FormControl>
                <div className='flex items-center justify-between'>
                  <FormMessage />

                  <a
                    href='forgot-password'
                    className='w-fit ml-auto text-secondary-50 text-sm text-end font-semibold'
                  >
                    Forgot your password?
                  </a>
                </div>
              </FormItem>
            )}
          />

          <p className='text-secondary-50 text-center'>
            Don't have an account?{' '}
            <a href='sign-up' className='font-semibold'>
              Sign up
            </a>
          </p>

          {error && (
            <Alert variant='destructive'>
              <Info className='h-4 w-4' />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}.</AlertDescription>
            </Alert>
          )}

          <Button className='w-full' isSubmit isLoading={isLoading} isDisabled={isLoading}>
            Sign In
          </Button>
        </form>
      </Form>
    </Container>
  );
};
