import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery';

interface ILoginRequest {
  email: string;
  password: string;
}

interface IAuthResponse {
  accessToken: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, ILoginRequest>({
      query: (body) => ({
        url: '/access/login',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/access/logout',
        method: 'POST',
      }),
    }),
    me: builder.query<{ id: string }, void>({
      query: () => '/access/me',
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useMeQuery } = authApi;
