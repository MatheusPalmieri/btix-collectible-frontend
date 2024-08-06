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
import { signUpProps, signUpSchema } from '@/schemas/auth/sign-up.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { Info } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const PageSignUp = () => {
  const { t } = useTranslation();
  const { signUp } = useAuthStore();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<signUpProps>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<signUpProps> = async (credentials: signUpProps) => {
    try {
      const { passwordConfirmation, ...rest } = credentials;

      setIsLoading(true);
      await signUp(rest);
      navigate('/');
    } catch (error: AxiosError | any) {
      const { message } = error.response.data;
      if (message === 'INVALID_USER') {
        setError('Duplicate email. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container flex back='sign-in'>
      <h1 className='text-2xl text-center font-bold'>{t('pages.authentication.sign_up.title')}</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('pages.authentication.sign_up.name')}</FormLabel>
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
                <FormLabel>{t('pages.authentication.sign_up.email')}</FormLabel>
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
                <FormLabel>{t('pages.authentication.sign_up.password')}</FormLabel>
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
                <FormLabel>{t('pages.authentication.sign_up.confirm_password')}</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='********' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <Alert variant='destructive'>
              <Info className='h-4 w-4' />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}.</AlertDescription>
            </Alert>
          )}

          <Button className='w-full' isSubmit isLoading={isLoading} isDisabled={isLoading}>
            {t('pages.authentication.sign_up.sign_up')}
          </Button>
        </form>
      </Form>
    </Container>
  );
};
