import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewAppointment from './components/NewAppointment';
import AuthPage from './pages/AuthPage';
import About from './pages/About';
import Home from './pages/Home';
import ProcedurePage from './pages/ProcedurePage';
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
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </main>
  );
}

export default App;
