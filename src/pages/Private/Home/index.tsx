import { IconBtix, IconDiamond, IconPassport } from '@/assets/icons';
import { Container } from '@/components/Container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuthStore } from '@/contexts/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const PageHome = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuthStore();

  const hasUser = !!user?.id;
  const fallback = user?.name ? user.name[0] : '';

  const collectibles = 3;

  return (
    <Container type='medium'>
      <section className='flex items-center gap-4'>
        {hasUser && (
          <Avatar className='size-24'>
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        )}

        {!hasUser && <Skeleton className='size-24 rounded-lg' />}

        <div className='space-y-0.5'>
          {hasUser && (
            <>
              <h1 className='text-2xl font-bold'>{user?.name?.split(' ')[0]}</h1>
              <p className='text-sm text-secondary-100'>{user?.email}</p>
              <div className='flex items-center gap-2'>
                <IconDiamond className='size-4' />
                <p className='font-bold'>4.000 pts</p>
              </div>
            </>
          )}

          {!hasUser && (
            <>
              <Skeleton className='w-24 h-8' />
              <Skeleton className='w-52 h-5' />
              <Skeleton className='w-20 h-6' />
            </>
          )}
        </div>
      </section>

      <section className='space-y-4'>
        <div className='flex items-center gap-4' onClick={() => navigate('passport')}>
          <div className='size-16 bg-primary-500 rounded-2xl flex items-center justify-center'>
            <IconPassport className='size-8 text-primary-100' />
          </div>

          <div>
            <h2 className='text-xl font-bold'>{t('pages.private.home.title_passport')}</h2>
            <div className='text-secondary-100 text-sm font-medium'>
              {t('pages.private.home.description_passport')}
            </div>
          </div>
        </div>

        <Separator />

        <div className='flex items-center gap-4' onClick={() => navigate('wallet')}>
          <div className='size-16 bg-primary-500 rounded-2xl flex items-center justify-center'>
            <IconBtix className='size-8 text-primary-100' />
          </div>

          <div>
            <h2 className='text-xl font-bold'>{t('pages.private.home.title_wallet')}</h2>
            <div className='text-secondary-100 text-sm font-medium'>
              {t(`pages.private.home.description_wallet_plural`, {
                count: collectibles,
              })}
            </div>
          </div>
        </div>

        <Separator />
      </section>
    </Container>
  );
};
