import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { confirmProps, confirmSchema } from '@/schemas/auth/confirm.schema';
import { AuthenticationContainer as Container } from '@/sections/Authentication/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const PageConfirm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<confirmProps>({
    resolver: yupResolver(confirmSchema),
  });
  const { handleSubmit, watch } = form;

  const onSubmit: SubmitHandler<confirmProps> = async ({ code }: confirmProps) => {
    setIsLoading(true);

    try {
      console.log(code);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error on confirm code:', error);
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
    <Container>
      <h1 className='text-2xl text-center font-bold'>Verify your account</h1>

      <Form {...form}>
        <form className='space-y-4'>
          <p className='text-secondary-100 text-center'>
            please enter the verification code we
            <br /> sent to your email address.
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
            Didn't receive the code?{' '}
            <span className='text-primary font-semibold cursor-pointer hover:underline transition-colors duration-200'>
              Resend
            </span>
          </p>
        </form>
      </Form>
    </Container>
  );
};
