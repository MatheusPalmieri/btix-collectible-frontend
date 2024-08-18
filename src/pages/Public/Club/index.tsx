import { IconAward } from '@/assets/icons';
import Logo from '@/assets/images/logo/logo.png';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Club } from '@/interfaces/club';
import { ClubBenefitLink } from '@/sections/Club/Benefit/Link';
import { getClub } from '@/services/club';
import { motion } from 'framer-motion';
import { CircleEllipsis, Link2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const PageClub = () => {
  const { slug } = useParams() as { slug: string };

  const [club, setClub] = useState<Club>();
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    const fetchClub = async () => {
      setIsLoading(true);
      try {
        const club = await getClub(slug);
        setClub(club);
      } catch (error) {
        console.error(error, 'Error fetching club.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchClub();
  }, []);

  const showLoading = isLoading || !club;
  const showClub = !isLoading && club;
  const showClubNotFound = !isLoading && !club;

  if (showClubNotFound) return <Container type='medium'>Club not found.</Container>;

  const redirect = (link: string) => window.open(link, '_blank');

  return (
    <Container type='medium'>
      <section className='flex flex-col items-center justify-center gap-4'>
        {showLoading && <Skeleton className='w-24 h-24 rounded-lg' />}

        {showClub && (
          <img
            src={club.image}
            alt='Club Image'
            className='size-24 rounded-lg bg-center bg-cover object-cover flex-shrink-0'
          />
        )}

        <div className='flex items-center gap-1.5'>
          <p className='text-sm font-semibold leading-none'>powered by</p>
          <img src={Logo} alt='Logo btix' className='h-4' />
        </div>
      </section>

      <Separator />

      <section className='flex flex-col gap-4'>
        {showLoading && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Button
              variant='ghost'
              rightIcon={<CircleEllipsis className='size-4' />}
              className='w-full text-sm font-bold uppercase'
              isDisabled
              isLoading
            >
              Loading...
            </Button>
          </motion.div>
        )}

        {showClub &&
          club.events.map((event, idx) => (
            <motion.div
              key={event.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * idx }}
            >
              <Button
                variant='ghost'
                rightIcon={<CircleEllipsis className='size-4' />}
                className='w-full text-sm font-bold uppercase'
                onClick={() => redirect(event.link)}
              >
                {event.label}
              </Button>
            </motion.div>
          ))}
      </section>

      <Separator />

      <section className='flex gap-2'>
        <IconAward className='mt-0.5' />

        <div className='w-full space-y-0.5'>
          {showLoading && (
            <>
              <Skeleton className='w-4/5 h-8' />
              <Skeleton className='w-full h-4' />
            </>
          )}

          {showClub && (
            <>
              <h1 className='text-2xl font-bold leading-none'>{club.name}</h1>
              <p className='text-secondary-100 text-xs font-medium'>{club.description}</p>
            </>
          )}
        </div>
      </section>

      <Separator />

      <section className='space-y-4'>
        {showLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-1'>
                <Link2 className='size-3.5 text-zinc-300' />

                <p className='text-sm font-medium'>Procurando beneficio</p>
              </div>

              <Button className='w-20 h-6 rounded-md' isDisabled isLoading>
                Loading...
              </Button>
            </div>
          </motion.div>
        )}

        {showClub &&
          club.links.map((link, idx) => (
            <div key={link.label} className='space-y-2'>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * idx }}
              >
                <ClubBenefitLink link={link} />
              </motion.div>

              <Separator className='opacity-80' />
            </div>
          ))}
      </section>
    </Container>
  );
};
