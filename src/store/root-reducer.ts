import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './UserSlice/UserSlice';
import { authReducer } from './AuthSlice/AuthSlice';
import { authApi } from '@/api/auth/auth';

export const rootReducer = combineReducers({
  userReducer,
  authReducer,
  [authApi.reducerPath]: authApi.reducer,
});
