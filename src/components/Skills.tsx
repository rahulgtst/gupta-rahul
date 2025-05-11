import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaAngular, FaAws } from 'react-icons/fa';
import { SiCplusplus, SiGit, SiGithub, SiTypescript, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';
import { Skill } from '../types';

const Skills = () => {
  const skillsList: Skill[] = [
    { id: 1, name: 'HTML', icon: <FaHtml5 className="text-[#E34F26] text-5xl" /> },
    { id: 2, name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6] text-5xl" /> },
    { id: 3, name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E] text-5xl" /> },
    { id: 4, name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] text-5xl" /> },
    { id: 5, name: 'React', icon: <FaReact className="text-[#61DAFB] text-5xl" /> },
    { id: 6, name: 'Angular', icon: <FaAngular className="text-[#DD0031] text-5xl" /> },
    { id: 7, name: 'Node.js', icon: <FaNodeJs className="text-[#339933] text-5xl" /> },
    { id: 8, name: 'Express', icon: <SiExpress className="text-[#000000] text-5xl" /> },
    { id: 9, name: 'MongoDB', icon: <SiMongodb className="text-[#4DB33D] text-5xl" /> },
    { id: 10, name: 'Python', icon: <FaPython className="text-[#3776AB] text-5xl" /> },
    { id: 11, name: 'C++', icon: <SiCplusplus className="text-[#00599C] text-5xl" /> },
    { id: 12, name: 'SQL', icon: <SiMysql className="text-[#00599C] text-5xl" /> },
    { id: 13, name: 'Git', icon: <SiGit className="text-[#F05032] text-5xl" /> },
    { id: 14, name: 'GitHub', icon: <SiGithub className="text-[#181717] text-5xl" /> },
    { id: 15, name: 'Linux', icon: <FcLinux className="text-[#FCC624] text-5xl" /> },
    { id: 16, name: 'AWS', icon: <FaAws className="text-[#181717] text-5xl" /> },
  ];

  return (
    <section className="py-20 bg-gray-100" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Technologies & tools
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto font-body">
          {skillsList.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:-translate-y-1"
            >
              {skill.icon}
              <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 