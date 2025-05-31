import { useState } from 'react';
import { apiServices } from '../services/apiService';

export function useAuthViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [hover, setHover] = useState(false);
  const [focusField, setFocusField] = useState('');

  const handleLogin = async (onLogin) => {
    try {
      const res = await apiServices.login(email, password);
      setError('');
      onLogin(res.token);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async () => {
    try {
      await apiServices.register(email, password);
      setSuccess(true);
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    success,
    setSuccess,
    hover,
    setHover,
    focusField,
    setFocusField,
    handleLogin,
    handleRegister,
  };
}
