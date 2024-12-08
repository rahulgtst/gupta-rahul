import React from 'react';
import ProfilePic from '../images/ProfilePic.png'; 

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6 text-center">
            About Me 👨‍💻
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <img 
                  src={ProfilePic} 
                  alt="Coding Animation" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-secondary/20 rounded-xl"></div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>My name is Rahul Gupta. Based in Delhi, India</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>B-Tech Graduate from Delhi Technological University (DTU)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>Software Engineer @ Misemind Technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>LeetCode 450+ Questions Solved, Contest Rating 1500+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>Passionate about Tech, Coding, and Anime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 