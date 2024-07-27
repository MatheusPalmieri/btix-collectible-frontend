import {
  ACCESS_EXPIRES_KEY,
  ACCESS_TOKEN_KEY,
  REFRESH_EXPIRES_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/auth";
import { Tokens } from "@/interfaces/user";

export const setTokens = (tokens: Tokens): void => {
  localStorage.setItem(ACCESS_TOKEN_KEY, tokens.access.token);
  localStorage.setItem(ACCESS_EXPIRES_KEY, tokens.access.expires);
  localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refresh.token);
  localStorage.setItem(REFRESH_EXPIRES_KEY, tokens.refresh.expires);
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const getTokens = (): {
  accessToken: string | null;
  refreshToken: string | null;
} => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  return {
    accessToken,
    refreshToken,
  };
};

export const removeTokens = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(ACCESS_EXPIRES_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(REFRESH_EXPIRES_KEY);
};
