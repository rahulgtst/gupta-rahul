import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Contact from './components/Contact.tsx';
import { BrowserRouter, Routes, Route } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
); 