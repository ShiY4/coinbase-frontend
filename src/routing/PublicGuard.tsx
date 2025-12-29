import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/hooks/ReduxCustomHooks/reduxHooks';
import { getAuthStatus } from '@/store/AuthSlice/AuthSlice';

export function PublicGuard() {
  const isAuth = useAppSelector(getAuthStatus);

  if (isAuth) {
    return <Navigate to='/dashboard' replace />;
  }

  return <Outlet />;
}
