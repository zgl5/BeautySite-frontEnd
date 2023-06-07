import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewAppointment from './components/NewAppointment';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import ProcedurePage from './pages/ProcedurePage';
import SignUpForm from './components/SignUpForm';
import { getUser } from './utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedure" element={<ProcedurePage />} />
        <Route path="/appointment" element={<NewAppointment />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />} />
        <Route path="/signup" element={<SignUpForm/>} />
       </Routes>
    </main>
  );
}

export default App;
