import { getRefreshToken, getTokens, removeTokens, setTokens } from '@/helpers/token';
import { User, UserAuth } from '@/interfaces/user';
import { me, refreshToken, signIn, signUp } from '@/services/auth';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { create } from 'zustand';
import { AuthStore, JWT } from './props';

function isTokenExpired(token: string) {
  const decoded: JWT = jwtDecode(token);
  const expirationTime = decoded.exp * 1000;
  const currentTime = Date.now();
  return currentTime > expirationTime;
}

function loadInitialState() {
  const { accessToken, refreshToken } = getTokens();

  const user = accessToken ? (jwtDecode<JwtPayload & User>(accessToken) as User) : null;

  return {
    user,
    token: accessToken,
    refreshToken,
  };
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  ...loadInitialState(),

  signUp: async (credentials: { name: string; email: string; password: string }) => {
    try {
      const data: UserAuth = await signUp(credentials);
      get().setUser(data);

      const { tokens } = data;
      setTokens(tokens);
    } catch (error) {
      if (error) throw error;
    }
  },

  signIn: async (credentials: { email: string; password: string }) => {
    try {
      const data: UserAuth = await signIn(credentials);
      get().setUser(data);

      const { tokens } = data;
      setTokens(tokens);
    } catch (error) {
      if (error) throw error;
    }
  },

  signOut: () => {
    removeTokens();
    set({ user: null, token: null, refreshToken: null });
  },

  setUser: (data: UserAuth) =>
    set((state: AuthStore) => {
      const { user, tokens } = data;

      if (user && !isTokenExpired(tokens.access.token)) {
        setTokens(tokens);
      }

      return {
        ...state,
        user,
        token: tokens.access.token,
        refreshToken: tokens.refresh.token,
      };
    }),

  verifyToken: async () => {
    const currentRefreshToken = getRefreshToken();

    if (currentRefreshToken) {
      try {
        const tokens = await refreshToken(currentRefreshToken);
        setTokens(tokens);

        const user = await me(tokens.access.token);
        get().setUser({ user, tokens });
      } catch (error) {
        console.error('Error verifying token', error);

        removeTokens();
        set({ user: null, token: null, refreshToken: null });

        window.location.href = '/sign-in';
      }
    }
  },
}));

useAuthStore.getState().verifyToken();
