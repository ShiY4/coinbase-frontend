import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  id: string | null;
  name: string | null;
  email: string | null;
}

const initialState: IUser = {
  id: null,
  name: null,
  email: null,
};

const UserSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
  selectors: {},
});

// export const {} = UserSlice.actions;
export const userReducer = UserSlice.reducer;
