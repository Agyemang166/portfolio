// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './components/Authentication/Login';
import SignUpPage from './components/Authentication/Signup';
import ForgotPassword from './components/Authentication/Forgotpassword';
import TransitionWrapper from './components/TransitionWrapper/TransitionWrapper';

function App() {
  const location = useLocation();

  return (
    <TransitionWrapper location={location}>
      <Routes location={location}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/" element={<LoginPage />} /> 
      </Routes>
    </TransitionWrapper>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
