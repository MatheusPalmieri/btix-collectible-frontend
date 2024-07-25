import { PageConfirm, PageSignIn, PageSignUp } from '@/pages/Authentication';
import { PageHome } from '@/pages/Private';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  // Private
  {
    path: '/',
    element: <PageHome />,
  },

  // Authentication
  {
    path: '/sign-in',
    element: <PageSignIn />,
  },
  {
    path: '/sign-up',
    element: <PageSignUp />,
  },
  {
    path: '/confirm',
    element: <PageConfirm />,
  },
]);
