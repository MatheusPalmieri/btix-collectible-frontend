import { Container } from '@/components/Container';
import { useTranslation } from 'react-i18next';

export const PageForgotPassword = () => {
  const { t } = useTranslation();

  return (
    <Container flex back='sign-in' className='justify-center md:justify-start'>
      <h1 className='text-2xl text-center font-bold'>
        {t('pages.authentication.forgot_password.title')}
      </h1>
      <p className='text-center'> {t('pages.authentication.forgot_password.description')}</p>
    </Container>
  );
};
