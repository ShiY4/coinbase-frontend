import { LoginForm } from './components';
import styles from './loginPage.module.scss';

export function LoginPage() {
  return (
    <div className={styles.loginPageWrapper}>
      <LoginForm />
    </div>
  );
}
