import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/hooks/ReduxCustomHooks/reduxHooks';
import { getAuthStatus } from '@/store/AuthSlice/AuthSlice';
import { useMeQuery } from '@/api/auth/auth';

export function AuthGuard() {
  const isAuth = useAppSelector(getAuthStatus);
  const { isLoading } = useMeQuery(undefined, {
    skip: !isAuth,
  });

  if (!isAuth) {
    return <Navigate to='/' replace />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Outlet />;
}
