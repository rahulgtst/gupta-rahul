import { FaGithub, FaExternalLinkAlt, FaRegStar } from "react-icons/fa";
import { ProjectsData } from "../../../constants/Projects.ts";

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
          Recent Work
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto font-body">
          {ProjectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 relative"
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
                    className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded-full ${project.status === "Completed"
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
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Code & Live Demo */}
                <div className="flex items-center gap-6 mt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-primary transition-colors text-sm font-medium"
                  >
                    <FaGithub className="text-lg" /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt className="text-lg" /> Live Demo
                    </a>
                  )}
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
