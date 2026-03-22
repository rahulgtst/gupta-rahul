import { useState, useEffect } from 'react';
import { SkillIcons } from '../../../constants/Skills.tsx';
import { fetchExperiences } from '../../../api/fetchExperiences.ts';

const Experience = () => {
  const [experiences, setExperiences] = useState<any[]>([]);

  useEffect(() => {
    fetchExperiences().then((data) => {
      data = data.reverse();
      setExperiences(data)
    });
  }, []);

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-primary mb-16 text-center">
          Education & Work Experience
        </h2>

        <div className="relative max-w-4xl mx-auto font-body">
          {/* Center vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-secondary transform -translate-x-1/2 z-0" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`mb-12 flex justify-between items-start ${isLeft ? "flex-row" : "flex-row-reverse"
                  } relative z-10`}
              >
                {/* Spacer for alternate layout */}
                <div className="w-5/12" />

                {/* Timeline Ring Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 border-2 border-secondary rounded-full bg-white z-10" />
                </div>

                {/* Experience Card */}
                <div className={`w-5/12 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-green-50 relative overflow-hidden
                  ${isLeft ? "ml-6" : "mr-6"} 
                `}>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Logo Box */}
                    <div className="w-12 h-12 flex-shrink-0 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold uppercase shadow-sm">
                      {exp.logo ? (
                        <img src={exp.logo} alt={`${exp.company} Logo`} className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        exp.company.charAt(0)
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {exp.company}
                      </h3>
                      <h4 className="text-md text-secondary">
                        {exp.position}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{exp.period}</p>
                  {exp?.techstack && <p className="flex flex-wrap items-center justify-start gap-2 pt-2 border-t border-gray-200 mt-3">
                    {exp.techstack.map((tech: string) => {
                      return <span className='text-3xl' key={tech} title={tech}>{SkillIcons[tech]}</span>
                    })}
                  </p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;