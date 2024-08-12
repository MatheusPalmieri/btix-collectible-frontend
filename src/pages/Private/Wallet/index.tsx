import { Container } from '@/components/Container';
import { Skeleton } from '@/components/ui/skeleton';
import { Ticket } from '@/interfaces/ticket';
import { cn } from '@/lib/utils';
import { getTickets } from '@/services/ticket';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const PageWallet = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const { results } = await getTickets();
        setTickets(results);
      } catch (error) {
        console.error('Error fetching tickets', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const showLoading = isLoading;
  const showTickets = !isLoading && tickets.length > 0;
  const showEmpty = !isLoading && tickets.length === 0;

  return (
    <Container back='/' type='medium'>
      <section
        className={cn('grid grid-cols-1 md:grid-cols-2 gap-4', showEmpty && 'md:grid-cols-1')}
      >
        {showLoading &&
          Array.from({ length: 3 }).map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: idx < 6 ? 0.1 * idx : 0.1 }}
              className='bg-secondary-400/70 flex items-center justify-between p-4 rounded-lg hover:bg-secondary-300 cursor-pointer transition-colors duration-300'
            >
              <div className='flex items-center gap-4'>
                <Skeleton className='size-16' />

                <div className='space-y-1'>
                  <Skeleton className='w-24 h-5 rounded' />

                  <Skeleton className='w-24 h-4 rounded' />
                </div>
              </div>

              <Eye className='opacity-80 animate-pulse' />
            </motion.div>
          ))}

        {showTickets &&
          tickets.map(({ id, image, name, advantage }, idx) => (
            <motion.div
              key={id}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: idx < 6 ? 0.1 * idx : 0.1 }}
              className='bg-secondary-400/70 flex items-center justify-between p-4 rounded-lg hover:bg-secondary-300 cursor-pointer transition-colors duration-300'
              onClick={() => navigate('/benefit', { state: { id: id } })}
            >
              <div className='flex items-center gap-4'>
                <img
                  src={image ?? 'https://placehold.co/200X200/222/FD6244.png?text='}
                  alt='Cage'
                  className='size-16 rounded-lg'
                />

                <div>
                  <h2 className='font-bold'>{name}</h2>
                  <p className='text-sm text-secondary-100 font-medium'>
                    {t(`pages.private.wallet.advantages${advantage === 1 ? '' : '_plural'}`, {
                      count: advantage,
                    })}
                  </p>
                </div>
              </div>

              <Eye />
            </motion.div>
          ))}

        {showEmpty && (
          <div className='flex items-center justify-center p-4 rounded-lg bg-secondary-400/70 text-secondary-100'>
            <p>{t('pages.private.wallet.empty')}</p>
          </div>
        )}
      </section>
    </Container>
  );
};
