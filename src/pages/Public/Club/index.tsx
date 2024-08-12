import { Container } from '@/components/Container';
import { useParams } from 'react-router-dom';

export const PageClub = () => {
  const { slug } = useParams();

  return (
    <Container back='/' type='medium'>
      <h1>{slug}</h1>
    </Container>
  );
};
