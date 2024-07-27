import { useAuthStore } from '@/contexts/auth';
import { Outlet, useNavigate } from 'react-router-dom';

export const Private = () => {
  const navigate = useNavigate();
  const { user, token, refreshToken, signOut } = useAuthStore();

  if (!user || !token || !refreshToken) {
    signOut();
    navigate('/sign-in');
  }

  return <Outlet />;
};
