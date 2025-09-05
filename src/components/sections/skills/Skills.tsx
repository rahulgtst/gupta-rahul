import { SkillsData } from "../../../constants/Skills.tsx";

const Skills = () => {

  return (
    <section className="py-20 bg-gray-100" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Tools & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto font-body">
          {SkillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 hover:-translate-y-1"
            >
              {skill.icon}
              <h3 className="text-lg font-medium text-gray-800">{skill?.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 