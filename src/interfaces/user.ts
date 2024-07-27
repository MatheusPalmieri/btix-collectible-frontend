export enum UserRole {
  USER = "user",
  ADMIN = "admin",
  TICKET_COMPANY = "ticket-company",
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  isEmailVerified: boolean;
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
