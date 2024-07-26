import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CircleCheck } from 'lucide-react';

export const PageCollectible = () => {
  return (
    <Container back='/' type='medium' className='flex flex-col'>
      <section className='flex gap-3'>
        <img
          src='https://placehold.co/200X200/222/FD6244.png?text=B'
          alt='Cage'
          className='size-24 rounded-lg'
        />

        <div className='md:w-[80%]'>
          <h1 className='font-bold'>Btix Club</h1>
          <p className='text-xs text-secondary-50 font-medium line-clamp-4'>
            Lorem ipsum dolor sit amet consectetur. Habitant pellentesque sem lectus pretium morbi
            odio sodales nullam morbi. Sodales ipsum nunc turpis pellentesque nisl porta volutpat.
            Semper lacus nunc amet....
          </p>
        </div>

        <div className='md:w-[25%] md:flex justify-end ml-auto'>
          <Button className='font-bold'>View NFT</Button>
        </div>
      </section>

      <section className='space-y-4'>
        <h2 className='text-2xl font-bold'>My advantages</h2>

        <Separator />

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <CircleCheck className='size-4 text-green-500' />

            <p className='text-sm font-medium'>Access to the exclusive group</p>
          </div>

          <Button className='h-6 rounded-md'>Access</Button>
        </div>
      </section>

      <section className='flex-1 flex items-end justify-end md:hidden'>
        <Button className='w-full font-bold'>View NFT</Button>
      </section>
    </Container>
  );
};
