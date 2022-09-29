import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/homePage/HomePage';

import Profile from './pages/profile/Profile';

import Login from './pages/login/Login';

import Register from './pages/register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
