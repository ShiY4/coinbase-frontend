import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthSlice {
  accessToken: string | null;
  isAuth: boolean;
}

const initialState: IAuthSlice = {
  accessToken: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setAccessTokenAndAuth: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuth = true;
    },
    clearAccessTokenAndAuth: (state) => {
      state.accessToken = null;
      state.isAuth = false;
    },
  },
  // selectors: {
  // },
});

export const getAuthStatus = createSelector([(state) => state.auth], (auth) => auth.isAuth);

export const { setAccessTokenAndAuth, clearAccessTokenAndAuth } = authSlice.actions;
// export const { } = authSlice.selectors;
export const authReducer = authSlice.reducer;
