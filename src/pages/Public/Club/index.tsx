import { IconAward } from '@/assets/icons';
import Logo from '@/assets/images/logo/logo.png';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Benefit, BenefitStatus, BenefitType } from '@/interfaces/benefit';
import { ClubBenefitLink } from '@/sections/Club/Benefit/Link';
import { CircleEllipsis } from 'lucide-react';

export const PageClub = () => {
  return (
    <Container type='medium'>
      <section className='flex flex-col items-center justify-center gap-4'>
        <img
          src='https://btix-static-files.netlify.app/images/layback.png'
          alt='Club Image'
          className='size-24 rounded-lg bg-center bg-cover object-cover flex-shrink-0'
        />

        <div className='flex items-center gap-1.5'>
          <p className='text-sm font-semibold leading-none'>powered by</p>
          <img src={Logo} alt='Logo btix' className='h-4' />
        </div>
      </section>

      <Separator />

      <section className='flex flex-col gap-4'>
        <Button
          variant='ghost'
          rightIcon={<CircleEllipsis className='size-4' />}
          className='text-sm font-bold uppercase'
        >
          Evento - sexta 09.10
        </Button>

        <Button
          variant='ghost'
          rightIcon={<CircleEllipsis className='size-4' />}
          className='text-sm font-bold uppercase'
        >
          Evento - sábado 23.10
        </Button>
      </section>

      <Separator />

      <section className='flex gap-2'>
        <IconAward className='mt-0.5' />

        <div className='space-y-0.5'>
          <h1 className='text-2xl font-bold leading-none'>Benefícios Layback</h1>
          <p className='text-secondary-100 text-xs font-medium'>
            Acompanhe seu desempenho e resgate suas recompensas
          </p>
        </div>
      </section>

      <Separator />

      <ClubBenefitLink
        benefit={
          {
            id: '1',
            status: BenefitStatus.PENDING,
            type: BenefitType.LINK,
            name: 'Pre venda dos ingressos',
            data: [
              {
                value: 'https://www.layback.com.br',
              },
            ],
            quantity: 1,
            quantityClaimed: 0,
            createdAt: '2021-10-06T00:00:00Z',
            updatedAt: '2021-10-06T00:00:00Z',
          } as Benefit
        }
        advantageId='1'
        fetchAdvantage={async () => console.log('fetchAdvantage')}
      />

      <Separator />

      <ClubBenefitLink
        benefit={
          {
            id: '1',
            status: BenefitStatus.PENDING,
            type: BenefitType.LINK,
            name: 'Link patrocinador',
            data: [
              {
                value: 'https://www.layback.com.br',
              },
            ],
            quantity: 1,
            quantityClaimed: 0,
            createdAt: '2021-10-06T00:00:00Z',
            updatedAt: '2021-10-06T00:00:00Z',
          } as Benefit
        }
        advantageId='1'
        fetchAdvantage={async () => console.log('fetchAdvantage')}
      />

      <Separator />
    </Container>
  );
};
