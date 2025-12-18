import { combineReducers } from '@reduxjs/toolkit';
import { user } from './UserSlice';

export const rootReducer = combineReducers({
  user,
});
