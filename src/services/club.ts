import { Club } from '@/interfaces/club';
import { createAxiosInstance } from './api';

const api = createAxiosInstance('advantages');

export const getClub = async (slug: string): Promise<Club> => {
  console.warn('🚀 ~ api:', api);
  console.warn('🚀 ~ getClub ~ slug:', slug);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: '1',

    image: 'https://btix-static-files.netlify.app/images/layback.png',
    name: 'Benefícios Layback',
    description: 'Acompanhe seu desempenho e resgate suas recompensas',

    events: [
      { label: 'Evento - sexta 09.10', link: '#' },
      { label: 'Evento - sábado 23.10', link: '#' },
    ],
    links: [
      { label: 'Pré-venda de ingressos', link: '#' },
      { label: 'Link patrocinador', link: '#' },
    ],
  };
};
