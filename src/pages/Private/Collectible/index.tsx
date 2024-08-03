import { IconNFT } from '@/assets/icons';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { claimAdvantage, getAdvantage, getAdvantages } from '@/services/advantage';
import { CircleCheck, Clock, ExternalLink, Link, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';

export const PageCollectible = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = window.innerWidth > 768;

  const [advantage, setAdvantage] = useState<any>();

  const fetchAdvantage = async () => {
    try {
      const { results } = await getAdvantages();
      const advantage = await getAdvantage(results[0].id);
      setAdvantage(advantage);
    } catch (error) {
      console.error('Error fetching advantage', error);
    }
  };

  useEffect(() => {
    fetchAdvantage();
  }, []);

  return (
    <Container back='/' type='medium' className='flex flex-col'>
      <section className='flex gap-3'>
        <img
          src={advantage?.image ?? 'https://placehold.co/200X200/222/FD6244.png?text=B'}
          alt='Cage'
          className='size-24 rounded-lg bg-center bg-cover object-cover flex-shrink-0'
        />
        <div className='md:w-[80%]'>
          <h1 className='font-bold'>{advantage?.name}</h1>
          <p className='text-xs text-secondary-50 font-medium line-clamp-4'>
            {advantage?.description}
          </p>
        </div>

        <div
          className='hidden md:w-[25%] md:flex justify-end ml-auto'
          onClick={() => setIsOpen(true)}
        >
          <Button className='font-bold'>View collectible</Button>
        </div>
      </section>

      <section className='space-y-4'>
        <h2 className='text-2xl font-bold'>My advantages</h2>

        <Separator />

        {advantage &&
          advantage?.benefits.map((benefit: any) => {
            return (
              <Benefit
                key={benefit?.id}
                benefit={benefit}
                advantageId={advantage?.id}
                fetchAdvantage={fetchAdvantage}
              />
            );
          })}
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
          View collectible
        </Button>
      </section>
    </Container>
  );
};

const Content = () => (
  <section className='space-y-4'>
    <div className='relative h-60 md:h-56 md:py-8 pb-60 md:pb-56'>
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
          <h3 className='text-lg font-bold'>Btix Club</h3>
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

const Benefit = ({
  benefit,
  advantageId,
  fetchAdvantage,
}: {
  benefit: any;
  advantageId: string;
  fetchAdvantage: () => Promise<any>;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const claimBenefit = async (benefitId: string) => {
    try {
      setIsLoading(true);
      await claimAdvantage(advantageId, benefitId);
      await fetchAdvantage();
    } catch (error) {
      console.error('Error claiming benefit', error);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1'>
        {benefit.status === 'claimed' ? (
          <CircleCheck className='size-4 text-green-500' />
        ) : benefit.status === 'blocked' ? (
          <Lock className='size-4 text-red-500' />
        ) : (
          <Clock className='size-4 text-orange-500' />
        )}

        <p className='text-sm font-medium'>{benefit.name}</p>

        <div className='w-8 bg-secondary-200 rounded-md flex items-center justify-center'>
          <span className='text-xs'>
            {benefit.quantity}/{benefit.quantityClaimed}
          </span>
        </div>
      </div>

      <Button
        className='w-20 h-6 rounded-md'
        onClick={() => claimBenefit(benefit?.id)}
        isLoading={isLoading}
        isDisabled={isLoading}
      >
        {benefit.type === 'link' ? 'Access' : 'Claim'}
      </Button>
    </div>
  );
};
