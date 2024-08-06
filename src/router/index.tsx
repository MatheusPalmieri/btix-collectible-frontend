import { Authentication } from '@/layouts/Authentication';
import { Private } from '@/layouts/Private';
import { PageForgotPassword, PageSignIn, PageSignUp } from '@/pages/Authentication';
import { PageCollectible, PageHome } from '@/pages/Private';
import { PageNotFound } from '@/pages/Public';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  // Private
  {
    path: '',
    element: <Private />,
    children: [
      {
        path: '',
        element: <PageHome />,
      },
      {
        path: 'collectible',
        element: <PageCollectible />,
      },
    ],
  },

  // Authentication
  {
    path: '',
    element: <Authentication />,
    children: [
      {
        path: 'sign-in',
        element: <PageSignIn />,
      },
      {
        path: 'sign-up',
        element: <PageSignUp />,
      },
      {
        path: 'forgot-password',
        element: <PageForgotPassword />,
      },
    ],
  },

  // 404 - Not Found
  {
    path: '*',
    element: <Navigate to='/not-found' replace />,
  },
  {
    path: 'not-found',
    element: <PageNotFound />,
  },
]);
