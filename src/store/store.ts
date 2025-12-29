import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { authApi } from '@/api/auth/auth';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export { store };
