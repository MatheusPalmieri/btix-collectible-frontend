import { createAxiosInstance } from './api';

const api = createAxiosInstance('advantages');

export const claimAdvantage = async (advantageId: string, benefitId: string): Promise<any> => {
  const { data } = await api.post(`${advantageId}/${benefitId}`);
  return data;
};

export const getAdvantages = async (): Promise<any> => {
  const { data } = await api.get('');
  return data;
};

export const getAdvantagesByTicket = async (ticketId: string): Promise<any> => {
  const { data } = await api.get(`${ticketId}/ticket`);
  return data;
};

export const getAdvantage = async (advantageId: string): Promise<any> => {
  const { data } = await api.get(advantageId);
  return data;
};
