import { useLoginMutation } from '@/api/auth/auth';
import { AuthFormInput } from '../AuthFormInput/AuthFormInput';

import { useState } from 'react';

import styles from './loginForm.module.scss';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, { isLoading, isError, data }] = useLoginMutation();

  const loginSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password }).unwrap();
      // navigate('/')
      console.log(result);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <form name='loginForm' className={styles.loginFormContainer} onSubmit={loginSubmitHandler}>
      <AuthFormInput
        labelText='Email'
        inputId='email'
        formName='loginForm'
        placeholder='address@email.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthFormInput
        labelText='Password'
        inputId='password'
        formName='loginForm'
        inputType='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Login'}
      </button>
      {isError && <p>Login failed</p>}
    </form>
  );
}
