import React from 'react';
import ProfilePic from '../../../assets/images/ProfilePic.png'; 

const calculateYOE = (startDateStr) => {
  const startDate = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return months === 0 ? `${years} Years` : `${years} Years, ${months} Months`;
};

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6 text-center">
            About Me
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
            
            <div className="bg-green-50 p-8 rounded-xl">
              <ul className="space-y-4 font-body">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>My name is Rahul Gupta, & I'm based in Bengaluru, India.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>Current Position: SDE-1 @Pococare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>Total Experience: {calculateYOE("2024-02-19")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>B.Tech graduate from Delhi Technological University (DTU)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>Solved 500+ questions on LeetCode with a contest rating 1560</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">▹</span>
                  <span>Passionate about Tech, Coding, & Psychology</span>
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