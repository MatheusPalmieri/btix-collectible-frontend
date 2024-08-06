import { Container } from '@/components/Container';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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

  return (
    <Container type='medium'>
      <section className='flex items-center gap-4'>
        <RadioGroup
          defaultValue={language}
          onValueChange={changeLanguage}
          className='w-full flex justify-between gap-4 transition-all duration-300'
        >
          {languages.map(({ value, label }) => {
            const isActive = value === language;

            return (
              <div
                className={cn(
                  'w-full h-20 px-4 rounded-lg bg-secondary-300 flex items-center space-x-2',
                  isActive && 'border border-primary',
                )}
              >
                <RadioGroupItem value={value} id={value} />
                <Label htmlFor={value}>{label}</Label>
              </div>
            );
          })}
        </RadioGroup>
      </section>
    </Container>
  );
};
