import { useOutlet } from 'react-router-dom';

export function RootLayout() {
  const outlet = useOutlet();
  return <>{outlet}</>;
}
