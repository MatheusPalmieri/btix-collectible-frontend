export enum BenefitStatus {
  PENDING = 'pending',
  CLAIMED = 'claimed',
  BLOCKED = 'blocked',
  CANCELLED = 'cancelled',
}

export enum BenefitType {
  LINK = 'link',
  CLAIM = 'claim',
  ACCESS = 'access',
  VOUCHER = 'voucher',
  DISCOUNT = 'discount',
  CASHBACK = 'cashback',
  POINTS = 'points',
  OTHER = 'other',
}

export interface Benefit {
  id: string;

  status: BenefitStatus;
  type: BenefitType;

  name: string;
  data: { value: string }[];

  quantity: number;
  quantityClaimed: number;

  createdAt: string;
  updatedAt: string;
}
