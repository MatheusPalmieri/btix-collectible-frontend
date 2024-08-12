import Logo from '@/assets/images/logo/icon-white.png';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/contexts/auth';
import QRCode from 'qrcode.react';

export const PagePassport = () => {
  const { user } = useAuthStore();

  return (
    <Container back='/' type='medium' className='flex flex-col'>
      <div className='text-center space-y-1'>
        <h2 className='text-lg font-semibold leading-none tracking-tight'>{user?.name}</h2>

        <p className='text-sm text-muted-foreground'>Seu acesso pessoal exclusivo</p>
      </div>

      <div className='bg-secondary-200 rounded-lg p-4 mx-auto'>
        <QRCode
          value='access_personal_token'
          bgColor='#4c4c4c'
          fgColor='#fff'
          size={300}
          imageSettings={{
            src: Logo,
            width: 50,
            height: 50,
            excavate: true,
          }}
          style={{ borderRadius: 4 }}
        />
      </div>

      <section className='flex-1 flex items-end justify-end'>
        <Button variant='secondary' className='w-full md:w-96 font-semibold'>
          Save
        </Button>
      </section>
    </Container>
  );
};
