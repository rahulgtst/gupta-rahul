import React from 'react';

const Home = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-primary text-white relative"
      id="home"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-secondary/30 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-secondary/30 rounded-full blur-3xl -bottom-20 -right-20"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
          Hi, I'm Rahul Gupta 👋
          <span className="block mt-4 text-secondary">
            Software Engineer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-12">
          Building impactful solutions, diving into new technologies and always learning new things.
        </p>
        
        <button 
          onClick={scrollToBottom}
          className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors"
        >
          Let's Connect 🚀
        </button>
      </div>
    </section>
  );
};

export default Home; 