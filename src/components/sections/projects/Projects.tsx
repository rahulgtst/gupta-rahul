import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaRegStar } from "react-icons/fa";
import { SkillIcons } from "../../../constants/Skills.tsx";
import { fetchProjects } from "../../../api/fetchProjects.ts";

const Projects = () => {
  const [projectsData, setProjectsData] = useState<any[]>([]);

  useEffect(() => {
    fetchProjects().then((data) => setProjectsData(data));
  }, []);

  return (
    <section className="py-20 bg-gray-100" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
          Recent Work
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto font-body">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 relative"
            >
              {/* Project Image */}
              <div className="relative w-full h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Status Badge */}
                {project.status && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-md font-normal rounded-full ${project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {project.status}
                  </span>
                )}
                {/* Star Icon Instead of Featured Text */}
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-purple-200 text-purple-700 text-2xl hover:scale-110 transition-transform duration-300 p-2 rounded-3xl">
                    <FaRegStar
                      title="Featured Project"
                    />
                  </span>
                )}
              </div>

              {/* Project Details */}
              <div className="px-6 py-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-black hover:text-gray-600 transition-colors text-sm font-medium"
                      >
                        <FaGithub className="text-[20px]" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary transition-colors text-sm"
                        >
                          <FaExternalLinkAlt className="text-[16px]" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-4 place-items-center">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="cursor-pointer text-3xl"
                      >
                        {SkillIcons[tech] || (
                          <span className="text-gray-500">{tech}</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
