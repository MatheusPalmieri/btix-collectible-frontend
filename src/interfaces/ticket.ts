export enum TicketStatus {
  CREATING = 'creating',
  PENDING = 'pending',
  COMPLETED = 'completed',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
}

export interface Ticket {
  id: string;
  status: TicketStatus;
  name: string;
  description: string;
  image: string;
  advantage: number;
}
