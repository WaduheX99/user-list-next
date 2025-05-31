'use client';
import authStyles from './components/authStyles';
import { useAuthViewModel } from '../viewmodels/AuthViewModel';

export default function LoginView({ onLogin, onToggle }) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    hover,
    setHover,
    focusField,
    setFocusField,
    handleLogin,
  } = useAuthViewModel();

  return (
    <div style={authStyles.page}>
      <div style={authStyles.container}>
        <h2 style={authStyles.title}>Login</h2>
        <input
          placeholder="Email"
          style={{
            ...authStyles.input,
            ...(focusField === 'email' ? authStyles.inputFocus : {}),
          }}
          onFocus={() => setFocusField('email')}
          onBlur={() => setFocusField('')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          style={{
            ...authStyles.input,
            ...(focusField === 'password' ? authStyles.inputFocus : {}),
          }}
          onFocus={() => setFocusField('password')}
          onBlur={() => setFocusField('')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            ...authStyles.button,
            ...(hover ? authStyles.buttonHover : {}),
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => handleLogin(onLogin)}
        >
          Login
        </button>
        {error && (
          <p style={{ ...authStyles.message, ...authStyles.error }}>{error}</p>
        )}

        <p style={{ color: '#fff', marginTop: 20, fontSize: 14, textAlign: 'center' }}>
          Don’t have an account?{' '}
          <span
            onClick={onToggle}
            style={{ color: '#00ffff', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}
