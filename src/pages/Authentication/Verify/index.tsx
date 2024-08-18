import { Container } from '@/components/Container';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { verifyProps, verifySchema } from '@/schemas/auth/verify.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const PageVerify = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<verifyProps>({
    resolver: yupResolver(verifySchema),
  });
  const { handleSubmit, watch } = form;

  const onSubmit: SubmitHandler<verifyProps> = async ({ code }: verifyProps) => {
    setIsLoading(true);

    try {
      console.warn(code);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error on verify code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const subscription = watch(({ code }) => {
      if (code && code.length === 6) handleSubmit(onSubmit)();
    });

    return () => subscription.unsubscribe();
  }, [watch, handleSubmit, onSubmit]);

  return (
    <Container flex back='sign-in'>
      <h1 className='text-2xl text-center font-bold'>{t('pages.authentication.verify.title')}</h1>

      <Form {...form}>
        <form className='space-y-4'>
          <p className='text-secondary-100 text-center'>
            {t('pages.authentication.verify.description')}
          </p>

          <FormField
            control={form.control}
            name='code'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    {...field}
                    disabled={isLoading}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage className='text-center' />
              </FormItem>
            )}
          />

          <p className='text-secondary-100 text-center'>
            {t('pages.authentication.verify.no_receive')}{' '}
            <span className='text-primary font-semibold cursor-pointer hover:underline transition-colors duration-300'>
              {t('pages.authentication.verify.resend')}
            </span>
          </p>
        </form>
      </Form>
    </Container>
  );
};
