import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAngular, FaAws, FaJava } from 'react-icons/fa';
import { SiGit, SiGithub, SiTypescript, SiExpress, SiMongodb } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";
import { FcLinux } from 'react-icons/fc';
import { BiLogoPostgresql } from "react-icons/bi";

export const SkillIcons: Record<string, JSX.Element> = {
    HTML: <FaHtml5 className="text-[#E34F26]" />,
    CSS: <FaCss3Alt className="text-[#1572B6]" />,
    JavaScript: <FaJs className="text-[#F7DF1E]" />,
    TypeScript: <SiTypescript className="text-[#3178C6]" />,
    React: <FaReact className="text-[#61DAFB]" />,
    Angular: <FaAngular className="text-[#DD0031]" />,
    Node: <FaNodeJs className="text-[#339933]" />,
    Express: <SiExpress className="text-[#000000]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    Java: <FaJava className="text-[#ED8B00]" />,
    Go: <FaGolang className="text-[#00ADD8]" />,
    SQL: <BiLogoPostgresql className="text-[#4479A1]" />,
    Git: <SiGit className="text-[#F05032]" />,
    GitHub: <SiGithub className="text-[#181717]" />,
    Linux: <FcLinux className="text-3xl" />,
    AWS: <FaAws className="text-[#FF9900]" />,
};