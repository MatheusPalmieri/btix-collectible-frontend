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
import { signUpProps, signUpSchema } from '@/schemas/auth/sign-up.schema';
import { AuthenticationContainer as Container } from '@/sections/Authentication/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const PageSignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<signUpProps>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<signUpProps> = async (credentials: signUpProps) => {
    setIsLoading(true);

    try {
      console.log(credentials);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error on sign up:', error);
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
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Btix Collectible' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='passwordConfirmation'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password Confirmation</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='********' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-full' isSubmit isLoading={isLoading} isDisabled={isLoading}>
            Sign Up
          </Button>
        </form>
      </Form>
    </Container>
  );
};
