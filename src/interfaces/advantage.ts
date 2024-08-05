import { Benefit } from './benefit';

export enum AdvantageStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}

export interface Advantage {
  id: string;

  status: AdvantageStatus;
  tickets: string[];

  name: string;
  description: string;
  image: string;

  benefits: Benefit[];

  createdAt: string;
  updatedAt: string;
}
