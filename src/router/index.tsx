import { Authentication } from '@/layouts/Authentication';
import { Private } from '@/layouts/Private';
import { PageForgotPassword, PageSignIn, PageSignUp } from '@/pages/Authentication';
import { PageBenefit, PageHome, PagePassport, PageProfile, PageWallet } from '@/pages/Private';
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
        path: 'benefit',
        element: <PageBenefit />,
      },
      {
        path: 'passport',
        element: <PagePassport />,
      },
      {
        path: 'profile',
        element: <PageProfile />,
      },
      {
        path: 'wallet',
        element: <PageWallet />,
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
