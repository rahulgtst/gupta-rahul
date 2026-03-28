import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { fetchProjects } from "../../../api/fetchProjects.ts";

/** Web only: 6-col grid — odd rows 4+2 (2/3 + 1/3), even rows 2+4 (1/3 + 2/3). */
const projectColSpanClass = (index: number, total: number) => {
  const alone = total % 2 === 1 && index === total - 1;
  if (alone) return "md:col-span-6";

  const row = Math.floor(index / 2);
  const firstInPair = index % 2 === 0;
  const oddRow = row % 2 === 0;
  if (oddRow) {
    return firstInPair ? "md:col-span-4" : "md:col-span-2";
  }
  return firstInPair ? "md:col-span-2" : "md:col-span-4";
};

const Projects = () => {
  const [projectsData, setProjectsData] = useState<any[]>([]);

  useEffect(() => {
    fetchProjects().then((data) => setProjectsData(data));
  }, []);

  return (
    <section className="bg-surface_container_low py-20 md:py-28" id="projects">
      <div className="mx-auto max-w-[1400px] px-6 font-body">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-primary md:text-3xl">
            Projects
          </h2>
          <p className="text-label-md text-outline">Scroll to explore work</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:items-stretch md:gap-4">
          {projectsData.map((project, index) => {
            const dark = Boolean(project.featured);
            return (
              <article
                key={project.id}
                className={`group flex min-h-[200px] flex-col overflow-hidden transition-transform duration-button md:min-h-0 md:h-full ${projectColSpanClass(
                  index,
                  projectsData.length
                )} ${
                  dark
                    ? "bg-primary text-on_primary"
                    : "bg-surface_container_highest text-primary"
                }`}
              >
                {/* <div
                  className={`relative w-full shrink-0 overflow-hidden ${
                    dark
                      ? "aspect-[16/10] md:aspect-auto md:min-h-[220px]"
                      : "h-48 md:h-56"
                  }`}
                >
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {project.status ? (
                    <span
                      className={`absolute left-4 top-4 px-3 py-1 text-label-md ${
                        dark
                          ? "bg-on_primary/10 text-on_primary"
                          : "bg-surface/90 text-primary"
                      }`}
                    >
                      {project.status}
                    </span>
                  ) : null}
                </div> */}

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight md:text-xl">
                      {`0${index + 1} // ${project.title}`}
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-opacity hover:opacity-70 ${
                          dark ? "text-on_primary" : "text-primary"
                        }`}
                        aria-label="GitHub"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-opacity hover:opacity-70 ${
                            dark ? "text-on_primary" : "text-primary"
                          }`}
                          aria-label="Live site"
                        >
                          <FaExternalLinkAlt className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <p
                    className={`mt-3 text-body-md ${
                      dark ? "text-on_primary/85" : "text-on_surface"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-label-md ${
                          dark
                            ? "bg-on_primary/10 text-on_primary"
                            : "bg-surface_container_high text-primary"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
