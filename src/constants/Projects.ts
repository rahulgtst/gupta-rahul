import TaskMaster from '../assets/images/TaskMaster.png';
import RPSDuel from '../assets/images/RPSDuel.png';
import AIT from '../assets/images/AIT.png';
import GA from '../assets/images/GA.png';
import GR from '../assets/images/GR.png';
import RPG from '../assets/images/RPG.png';
import { Project } from "../types/Project.ts";

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "Personal portfolio highlighting background, professional experience, and interests.",
    image: GR,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/rahulgtst/gupta-rahul",
    liveUrl: "https://gupta-rahul.vercel.app/"
  },
  {
    id: 2,
    title: "TaskMaster",
    description: "A Todo web app with full CRUD capabilities, dual-theme support, & responsive design.",
    image: TaskMaster,
    technologies: ["React.js", "Tailwind CSS", "REST API", "Dark Mode"],
    githubUrl: "https://github.com/rahulgtst/TaskMaster",
    liveUrl: "https://todo-tau-murex.vercel.app/"
  },
  {
    id: 3,
    title: "RPSDuel",
    description: "An interactive Rock-Paper-Scissors game featuring dynamic feedback & smooth animations.",
    image: RPSDuel,
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/rahulgtst/RPSDuel",
    liveUrl: "https://rahulgtst.github.io/RPSDuel/"
  },
  {
    id: 4,
    title: "Algorithm Visualizer",
    description: "An interactive Sorting Algo Visualizer.",
    image: AIT,
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/rahulgtst/algoisit",
    liveUrl: "https://rahulgtst.github.io/algoisit/"
  },
  {
    id: 5,
    title: "Advice Generator",
    description: "A random advice generator.",
    image: GA,
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/rahulgtst/get-advice",
    liveUrl: "https://rahulgtst.github.io/get-advice/"
  },
  {
    id: 6,
    title: "Password Generator",
    description: "Password Generator based on combination of length, characters, and numbers.",
    image: RPG,
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/rahulgtst/random-password-generator",
    liveUrl: "https://random-password-generator-bice.vercel.app/"
  },
];