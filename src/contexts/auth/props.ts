import { User, UserAuth } from "@/interfaces/user";

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type AuthContextProps = {
  user: User | null;
  setUser: (user: UserAuth) => void;
};

export interface AuthStore {
  user: User | null;
  token: string | null;
  refreshToken: string | null;

  signUp: (credentials: {
    name: string;
    email: string;
    password: string;
  }) => void;
  signIn: (credentials: { email: string; password: string }) => void;
  signOut: () => void;

  setUser: (user: UserAuth) => void;
  verifyToken: () => void;
}

export interface JWT {
  iap: number;
  exp: number;
}
