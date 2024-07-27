import { useAuthStore } from '@/contexts/auth';
import { Outlet, useNavigate } from 'react-router-dom';

export const Authentication = () => {
  const navigate = useNavigate();
  const { user, token, refreshToken } = useAuthStore();

  if (user || token || refreshToken) navigate('/');

  return <Outlet />;
};
