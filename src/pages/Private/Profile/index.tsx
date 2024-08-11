import { Access } from '@/components/Access';
import { Container } from '@/components/Container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuthStore } from '@/contexts/auth';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export const PageProfile = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const languages = [
    {
      value: 'pt',
      label: '🇧🇷 PT',
    },
    {
      value: 'en',
      label: '🇺🇸 EN',
    },
    {
      value: 'es',
      label: '🇪🇸 ES',
    },
  ];

  const { user } = useAuthStore();

  const hasUser = !!user?.id;
  const fallback = user?.name ? user.name[0] : '';

  return (
    <Container type='medium' back='/'>
      <section className='flex flex-col items-center gap-4'>
        {hasUser && (
          <Avatar className='size-24'>
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        )}

        {!hasUser && <Skeleton className='size-24 rounded-lg' />}

        <div className='space-y-0.5 mx-auto text-center'>
          {hasUser && (
            <>
              <h1 className='text-2xl font-bold'>{user?.name}</h1>
              <p className='text-sm text-secondary-100'>{user?.email}</p>
            </>
          )}

          {!hasUser && (
            <>
              <Skeleton className='w-24 h-8' />
              <Skeleton className='w-52 h-5' />
            </>
          )}
        </div>

        <Access big />
      </section>

      <section>
        <RadioGroup
          defaultValue={language}
          onValueChange={changeLanguage}
          className='w-full flex flex-col md:flex-row justify-between gap-4 transition-all duration-300'
        >
          {languages.map(({ value, label }) => {
            const isActive = value === language;

            return (
              <div>
                <RadioGroupItem value={value} id={value} className='hidden' />
                <Label htmlFor={value}>
                  <div
                    className={cn(
                      'w-full h-10 bg-secondary-300 rounded-lg flex items-center gap-2 px-4 transition-all duration-300',
                      isActive && 'ring-2 ring-primary',
                    )}
                  >
                    <span
                      className={cn(
                        'size-3 bg-secondary-500/80 rounded-full transition-all duration-300',
                        isActive && 'bg-primary',
                      )}
                    />

                    <p className='font-medium'>{label}</p>
                  </div>
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </section>
    </Container>
  );
};
