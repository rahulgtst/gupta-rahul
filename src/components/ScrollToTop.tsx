import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      
      const scrolled = (winScroll / height) * 100;
      
      setScrollProgress(scrolled);
      setShowButton(winScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
        showButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        className="absolute w-full h-full -rotate-90"
        viewBox="0 0 100 100"
      >
        <circle
          className="text-white/20"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="42"
          cx="50"
          cy="50"
        />
        <circle
          className="text-white transition-all duration-300"
          strokeWidth="8"
          strokeDasharray={264}
          strokeDashoffset={264 - (264 * scrollProgress) / 100}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="42"
          cx="50"
          cy="50"
        />
      </svg>
      
      <svg
        className="w-5 h-5 text-white relative"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop; 