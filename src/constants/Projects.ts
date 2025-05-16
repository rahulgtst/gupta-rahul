import TaskMaster from '../assets/images/TaskMaster.png';
import RPSDuel from '../assets/images/RPSDuel.png';
import { Project } from "../types/Project.ts";

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: "TaskMaster",
    description: "A Todo web app with full CRUD capabilities, dual-theme support, & responsive design. Built with ReactJS & Tailwind CSS for optimal performance & user experience.",
    image: TaskMaster,
    technologies: ["React.js", "Tailwind CSS", "REST API", "Dark Mode"],
    githubUrl: "https://github.com/rahulgtst/TaskMaster",
    liveUrl: "https://todo-tau-murex.vercel.app/"
  },
  {
    id: 2,
    title: "RPSDuel",
    description: "An interactive Rock-Paper-Scissors game featuring dynamic feedback & smooth animations. Built with modern web technologies for an engaging gaming experience.",
    image: RPSDuel,
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/rahulgtst/RPSDuel",
    liveUrl: "https://rahulgtst.github.io/RPSDuel/"
  },
];