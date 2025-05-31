'use client';
import { useState } from 'react';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import HomeView from '../views/HomeView';

export default function Page() {
  const [token, setToken] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  if (!token) {
    return (
      <div>
        {showRegister
  ? <RegisterView onToggle={() => setShowRegister(false)} />
  : <LoginView onLogin={setToken} onToggle={() => setShowRegister(true)} />}
  
      </div>
    );
  }

  return <HomeView />;
}