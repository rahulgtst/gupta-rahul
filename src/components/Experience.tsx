import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Misemind Technologies",
      position: "Software Engineer",
      period: "Feb 2024 - Present",
    },
  ];

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-primary mb-16 text-center">
          Work Experience 💼
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              
              <div className="absolute left-0 top-0 bottom-0 w-px bg-secondary/30">
                
                <div className="absolute top-2 -left-[5px] w-[11px] h-[11px] rounded-full bg-secondary" />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 ml-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {exp.company}
                </h3>
                <h4 className="text-lg font-semibold text-secondary mb-2">
                  {exp.position}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 