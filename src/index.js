import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/layout/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/"/>
      <Route element={<About />} path="/about"/>
    </Routes>
  </BrowserRouter>
  
);


