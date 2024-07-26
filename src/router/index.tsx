import { PageForgotPassword, PageSignIn, PageSignUp, PageVerify } from '@/pages/Authentication';
import { PageNotFound } from '@/pages/NotFound';
import { PageCollectible, PageHome } from '@/pages/Private';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  // Private
  {
    path: '',
    element: <PageHome />,
  },
  {
    path: 'collectible',
    element: <PageCollectible />,
  },

  // Authentication
  {
    path: 'sign-in',
    element: <PageSignIn />,
  },
  {
    path: 'sign-up',
    element: <PageSignUp />,
  },
  {
    path: 'verify',
    element: <PageVerify />,
  },
  {
    path: 'forgot-password',
    element: <PageForgotPassword />,
  },

  // 404 - Not Found
  {
    path: '*',
    element: <Navigate to='/404' replace />,
  },
  {
    path: 'not-found',
    element: <PageNotFound />,
  },
]);
