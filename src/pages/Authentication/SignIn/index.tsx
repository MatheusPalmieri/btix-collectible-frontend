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
import { signInProps, signInSchema } from '@/schemas/auth/sign-in.schema';
import { AuthenticationContainer as Container } from '@/sections/Authentication/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const PageSignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<signInProps>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<signInProps> = async (credentials: signInProps) => {
    setIsLoading(true);

    try {
      console.log(credentials);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error on sign in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
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

          <Button className='w-full' isSubmit isLoading={isLoading} isDisabled={isLoading}>
            Sign In
          </Button>
        </form>
      </Form>
    </Container>
  );
};
