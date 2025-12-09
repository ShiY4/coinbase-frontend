import { createHashRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts';
import { LoginPage } from '@/pages';

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // { index: true, 
      //   element: <LoginPage /> 
      // },
      // { element: <PrivateRoute />, 
      //   children: [] 
      // },
    ],
  },
]);