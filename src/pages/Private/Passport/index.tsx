import { Access } from '@/components/Access';
import { Container } from '@/components/Container';

export const PagePassport = () => {
  return (
    <Container back='/' type='medium' className='flex flex-col'>
      <section className='flex-1 flex items-end justify-end'>
        <Access full variant='default' />
      </section>
    </Container>
  );
};
