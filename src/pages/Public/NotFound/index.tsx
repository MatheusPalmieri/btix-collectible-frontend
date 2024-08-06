import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const back = () => navigate('/', { replace: true });

  return (
    <main className='h-screen flex flex-col justify-center text-center gap-2'>
      <h1 className='text-4xl text-custom-blue-100 font-semibold'>
        {t('pages.public.not_found.title')}
      </h1>

      <p className='text-zinc-400'>
        {t('pages.public.not_found.description')} <br />
        {t('pages.public.not_found.warn')}
      </p>

      <Button
        variant='link'
        className='text-sm text-zinc-100 font-semibold no-underline flex gap-1 items-center justify-center px-0 hover:text-primary duration-300'
        onClick={back}
      >
        <ChevronLeft size='14px' strokeWidth='3' />
        {t('pages.public.not_found.back')}
      </Button>
    </main>
  );
};
