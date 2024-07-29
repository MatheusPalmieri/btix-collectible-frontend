export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  TICKET_COMPANY = 'ticket-company',
}

export interface User {
  id: string;

  name: string;
  avatar?: string;

  role: UserRole;

  email: string;
  isEmailVerified: boolean;

  data: Record<string, any>;
  apiKey: string;

  createdAt: string;
  updatedAt: string;
}

export interface Tokens {
  access: {
    token: string;
    expires: string;
  };
  refresh: {
    token: string;
    expires: string;
  };
}

export interface UserAuth {
  user: User;
  tokens: Tokens;
}
