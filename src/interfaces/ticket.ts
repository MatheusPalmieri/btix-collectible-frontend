export enum TicketStatus {
  CREATING = 'creating',
  PENDING = 'pending',
  COMPLETED = 'completed',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
}

export interface Ticket {
  id: string;
  event: string;
  owner: string;
  newOwner: string;
  referenceId: string;
  status: TicketStatus;
  tokenId: string;
  transactionHash: string;
  contractAddress: string;
  transaction: object;
  data: {
    price: number;
  };
  isEnabled: boolean;
  metadata: {
    name: string;
    description: string;
    image: string;
    external_link: string;
    animation_url: string;
    traits: Array<{
      trait_type: string;
      value: string;
    }>;
  };
  createdAt: Date;
  updatedAt: Date;
}
