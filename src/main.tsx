import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routing';
import { Provider } from 'react-redux';

import './main.css';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
