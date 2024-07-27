import { Container } from '@/components/Container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/contexts/auth';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PageHome = () => {
  const navigate = useNavigate();

  const { user } = useAuthStore();

  return (
    <Container type='medium'>
      <section className='flex items-center gap-4'>
        <Avatar className='size-24'>
          <AvatarImage src='' />
          <AvatarFallback>MP</AvatarFallback>
        </Avatar>

        <div className='space-y-2'>
          <div>
            <h1 className='text-2xl font-bold'>{user?.name}</h1>
            <p className='text-sm text-secondary-100'>{user?.email}</p>
          </div>

          <Button variant='secondary' className='h-6 rounded-md'>
            View profile
          </Button>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: index < 6 ? 0.1 * index : 0.1 }}
            className='bg-secondary-400/70 flex items-center justify-between p-4 rounded-lg hover:bg-secondary-300 cursor-pointer transition-colors duration-300'
            onClick={() => navigate('/collectible', { state: { id: index } })}
          >
            <div className='flex items-center gap-4'>
              <img
                src='https://placehold.co/200X200/222/FD6244.png?text=B'
                alt='Cage'
                className='size-16 rounded-lg'
              />

              <div>
                <h2 className='font-bold'>Btix Club</h2>
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
