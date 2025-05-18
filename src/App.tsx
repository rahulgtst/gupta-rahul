import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';

const App = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'Logo.png';

    // Remove old favicon if it exists
    const oldLink = document.querySelector("link[rel='icon']");
    if (oldLink) {
      document.head.removeChild(oldLink);
    }

    document.head.appendChild(link);
  }, []);
  return (
    <div className="min-h-screen">  
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App; 