import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaAngular } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiGit, SiGithub, SiVisualstudiocode, SiTypescript, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';

const Skills = () => {
  const skillsList = [
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26] text-5xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6] text-5xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E] text-5xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] text-5xl" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB] text-5xl" /> },
    { name: 'Angular', icon: <FaAngular className="text-[#DD0031] text-5xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] text-5xl" /> },
    { name: 'Express', icon: <SiExpress className="text-[#000000] text-5xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#4DB33D] text-5xl" /> },
    { name: 'Python', icon: <FaPython className="text-[#3776AB] text-5xl" /> },
    { name: 'C++', icon: <SiCplusplus className="text-[#00599C] text-5xl" /> },
    { name: 'SQL', icon: <SiMysql className="text-[#00599C] text-5xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] text-5xl" /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032] text-5xl" /> },
    { name: 'GitHub', icon: <SiGithub className="text-[#181717] text-5xl" /> },
    { name: 'VS Code', icon: <SiVisualstudiocode className="text-[#007ACC] text-5xl" /> },
    { name: 'Linux', icon: <FcLinux className="text-[#FCC624] text-5xl" /> },
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            My Skills 🛠️
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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