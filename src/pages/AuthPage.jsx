import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { useNavigate } from 'react-router-dom';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  function handleLogin() {
    setShowLogin(true);
  }

  function handleSignUp() {
    setShowLogin(false);
  }

  function handleSetUser(user) {
    setUser(user);
    navigate('/'); 
  }

  return (
    <main>
      <div>
        <p>This is the home page</p>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleLogin}>Log In</button>
      </div>
      {showLogin ? <LoginForm setUser={handleSetUser} /> : <SignUpForm setUser={handleSetUser} />}
    </main>
  );
}
