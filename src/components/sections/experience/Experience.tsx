import { useState, useEffect } from "react";
import { SkillIcons } from "../../../constants/Skills.tsx";
import { fetchExperiences } from "../../../api/fetchExperiences.ts";

const Experience = () => {
  const [experiences, setExperiences] = useState<any[]>([]);

  useEffect(() => {
    fetchExperiences().then((data) => {
      data = data.reverse();
      setExperiences(data);
    });
  }, []);

  return (
    <section className="bg-surface py-20 md:py-28" id="archive">
      <div className="mx-auto max-w-[1400px] px-6 font-body">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-primary md:text-3xl">
          Education &amp; experience
        </h2>
        <p className="mt-3 max-w-2xl text-body-md text-on_surface">
          Roles and milestones — a linear archive of where I&apos;ve built and
          learned.
        </p>

        <ul className="mt-14 space-y-4">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className="bg-surface_container_low p-6 transition-colors duration-button hover:bg-surface_container_high md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4 md:max-w-[65%]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-surface_container_highest font-display text-lg font-bold text-primary">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt=""
                        className="h-full w-full object-cover grayscale"
                      />
                    ) : (
                      <span>{exp.company?.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-primary">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-body-md text-on_surface">
                      {exp.position}
                    </p>
                    <p className="mt-2 text-label-md text-outline">
                      {exp.period}
                    </p>
                  </div>
                </div>
                {exp?.techstack?.length ? (
                  <div className="flex flex-wrap items-center gap-3 md:justify-end">
                    {exp.techstack.map((tech: string) => (
                      <span
                        key={tech}
                        className="flex items-center text-xl text-on_surface [&_svg]:text-current"
                        title={tech}
                      >
                        {SkillIcons[tech] ?? (
                          <span className="text-label-md">{tech}</span>
                        )}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
