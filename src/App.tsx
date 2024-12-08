import React from 'react';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

const App = () => {
  return (
    <div className="min-h-screen">      
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
};

export default App; 