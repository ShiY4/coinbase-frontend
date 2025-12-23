import { AuthFormInput } from '../AuthFormInput/AuthFormInput';
import styles from './loginForm.module.scss';

export function LoginForm() {
  return (
    <form name='loginForm' action='' className={styles.loginFormContainer}>
      <AuthFormInput labelText='Email' inputId='email' formName='loginForm' />
      <AuthFormInput labelText='Password' inputId='password' formName='loginForm' inputType='password' />
    </form>
  );
}
