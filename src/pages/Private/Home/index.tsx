import { Container } from '@/components/Container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuthStore } from '@/contexts/auth';
import { Ticket } from '@/interfaces/ticket';
import { getTickets } from '@/services/ticket';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageHome = () => {
  const navigate = useNavigate();

  const { user } = useAuthStore();

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const tickets = await getTickets();
        setTickets(tickets);
      } catch (error) {
        console.error('Error fetching tickets', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const hasUser = !!user?.id;
  const fallback = user?.name
    ? user.name
        .split(' ')
        .map((name) => name[0])
        .join('')
    : '';

  return (
    <Container type='medium'>
      <section className='flex items-center gap-4'>
        {hasUser && (
          <Avatar className='size-24'>
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        )}

        {!hasUser && <Skeleton className='size-24 rounded-lg' />}

        <div className='space-y-2'>
          <div className='space-y-0.5'>
            {hasUser && (
              <>
                <h1 className='text-2xl font-bold'>{user?.name?.split(' ')[0]}</h1>
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

          <Button variant='secondary' className='h-6 rounded-md' isDisabled={!hasUser}>
            View profile
          </Button>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {!isLoading &&
          tickets.length > 0 &&
          tickets.map((ticket, idx) => (
            <motion.div
              key={ticket.id}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: idx < 6 ? 0.1 * idx : 0.1 }}
              className='bg-secondary-400/70 flex items-center justify-between p-4 rounded-lg hover:bg-secondary-300 cursor-pointer transition-colors duration-300'
              onClick={() => navigate('/collectible', { state: { id: ticket.id } })}
            >
              <div className='flex items-center gap-4'>
                <img
                  src={ticket.metadata.image ?? 'https://placehold.co/200X200/222/FD6244.png?text='}
                  alt='Cage'
                  className='size-16 rounded-lg'
                />

                <div>
                  <h2 className='font-bold'>{ticket.metadata.name}</h2>
                  <p className='text-sm text-secondary-100 font-medium'>4 Benefícios</p>
                </div>
              </div>

              <Eye />
            </motion.div>
          ))}
      </section>
    </Container>
  );
};
