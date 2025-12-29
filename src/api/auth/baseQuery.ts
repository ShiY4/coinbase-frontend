import { fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { type RootState } from '@/store/store';
import { clearAccessTokenAndAuth, setAccessTokenAndAuth } from '@/store/AuthSlice/AuthSlice';

interface IRefreshResponse {
  accessToken: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authReducer.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401 && (typeof args === 'string' || (args as FetchArgs).url !== '/access/refresh')) {
    const refreshResult = await baseQuery({ url: '/access/refresh', method: 'POST' }, api, extraOptions);

    if (refreshResult.data) {
      const { accessToken } = refreshResult.data as IRefreshResponse;
      api.dispatch(setAccessTokenAndAuth(accessToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(clearAccessTokenAndAuth());
    }
  }

  return result;
};
