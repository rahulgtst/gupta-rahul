import { SkillIcons } from "../../../constants/Skills.tsx";

const Skills = () => {

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Tools & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-4xl mx-auto font-body">
          {Object.keys(SkillIcons).map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-md shadow-md hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 hover:-translate-y-1"
            >
              {/* {skill.icon} */}
              <span className="text-4xl">{SkillIcons[skill]}</span>
              <span className="text-medium font-normal text-gray-800">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 