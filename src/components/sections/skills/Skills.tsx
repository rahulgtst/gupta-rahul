import { SkillCategories } from "../../../constants/SkillCategories.ts";
import { SkillIcons } from "../../../constants/Skills.tsx";

const Skills = () => {
  return (
    <section className="bg-primary py-20 text-on_primary md:py-28" id="skills">
      <div className="mx-auto max-w-[1400px] px-6 font-body">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-on_primary md:text-4xl md:leading-tight">
          Technical Skills
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {SkillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-label-md text-on_primary/70">{cat.title}</h3>
              <ul className="mt-6 space-y-3">
                {cat.items.map((item) => (
                  <li key={item}>
                    <div className="group flex cursor-default items-center justify-between gap-3 bg-primary_container/60 px-3 py-3 text-body-md text-on_primary transition-colors duration-button hover:bg-primary_container">
                      <span className="flex items-center gap-3">
                        <span className="text-on_primary [&_svg]:text-current">
                          {SkillIcons[item]}
                        </span>
                        <span>{item}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
