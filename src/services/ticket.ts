import { Ticket } from '@/interfaces/ticket';
import { createAxiosInstance } from './api';

const api = createAxiosInstance('tickets');

export const getTickets = async (): Promise<{ results: Ticket[] }> => {
  const { data } = await api.get('');
  return data;
};
