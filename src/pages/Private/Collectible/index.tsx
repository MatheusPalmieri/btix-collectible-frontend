import { IconNFT } from '@/assets/icons';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { CircleCheck, ExternalLink, Link } from 'lucide-react';
import { useState } from 'react';

export const PageCollectible = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = window.innerWidth > 768;

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

        <div
          className='hidden md:w-[25%] md:flex justify-end ml-auto'
          onClick={() => setIsOpen(true)}
        >
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

      {isDesktop ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className='text-secondary-700'>
            <Content />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent>
            <Content />
          </DrawerContent>
        </Drawer>
      )}

      <section className='flex-1 flex items-end justify-end md:hidden'>
        <Button className='w-full font-bold' onClick={() => setIsOpen(true)}>
          View NFT
        </Button>
      </section>
    </Container>
  );
};

const Content = () => (
  <section className='space-y-4'>
    <div className='relative h-56 md:py-8 pb-56'>
      <div className='absolute w-full h-56 z-10'>
        <img
          src='https://placehold.co/1920X1080/222/FD6244.png?text=Btix%20Club'
          alt='Banner'
          className='w-full h-full rounded-3xl bg-center bg-cover object-cover flex-shrink-0'
        />
        <div className='absolute z-20 top-0 left-0 w-2/3 h-full bg-gradient-to-r from-black/50 from-20% to-transparent rounded-3xl pointer-events-none'></div>
      </div>

      <div className='h-56 text-secondary-foreground p-4 flex flex-col justify-between absolute z-30'>
        <div className='space-y-1'>
          <p className='text-sm'>Btix</p>
          <h3 className='text-lg font-bold'>NFT Btix Club</h3>
          <div className='w-[50%] h-px bg-gradient-to-r from-background from-10% via-30%' />
        </div>

        <div className='flex items-center gap-3'>
          <p className='text-xl font-bold'>All access</p>

          <div className='flex items-center gap-1'>
            <IconNFT fill='#fff' />
            <p className='text-sm font-bold'>#{'1'.padStart(3, '0')}</p>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center justify-between'>
      <h3 className='text-xl font-bold'>NFT Btix Club</h3>

      <IconNFT />
    </div>

    <Separator className='opacity-20' />

    <div>
      <h4 className='text-lg font-bold'>Description</h4>

      <p className='text-justify font-medium'>
        The NFT Ticket gives direct access to the entire event, as well as an exclusive online event
        for fans of band x, y and z.
      </p>
    </div>

    <Separator className='opacity-20' />

    <div className='flex items-center gap-1'>
      <Link className='rotate-90' />

      <a
        href='https://polygonscan.com/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-sm font-bold'
      >
        Polygon Networking
      </a>

      <ExternalLink strokeWidth='2.5px' className='size-4 text-primary' />
    </div>
  </section>
);
