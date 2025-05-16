import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
); 