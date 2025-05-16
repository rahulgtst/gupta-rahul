import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectsData } from '../../../constants/Projects.ts';

const Projects = () => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
          Recent Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto font-body">
          {ProjectsData.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-base text-gray-200 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/30 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-lg"
                    >
                      <FaGithub className="text-xl" /> Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-lg"
                      >
                        <FaExternalLinkAlt className="text-xl" /> Live Demo
                      </a>
                    )}
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