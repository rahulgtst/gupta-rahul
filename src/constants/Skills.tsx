import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaAws,
  FaJava,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import {
  SiGit,
  SiGithub,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiKotlin,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

const iconClass = "h-5 w-5 shrink-0";

export const SkillIcons: Record<string, JSX.Element> = {
  HTML: <FaHtml5 className={iconClass} />,
  CSS: <FaCss3Alt className={iconClass} />,
  JavaScript: <FaJs className={iconClass} />,
  TypeScript: <SiTypescript className={iconClass} />,
  React: <FaReact className={iconClass} />,
  Angular: <FaAngular className={iconClass} />,
  Node: <FaNodeJs className={iconClass} />,
  Express: <SiExpress className={iconClass} />,
  MongoDB: <SiMongodb className={iconClass} />,
  Java: <FaJava className={iconClass} />,
  Go: <FaGolang className={iconClass} />,
  SQL: <BiLogoPostgresql className={iconClass} />,
  Git: <SiGit className={iconClass} />,
  GitHub: <SiGithub className={iconClass} />,
  Linux: <FaLinux className={iconClass} />,
  AWS: <FaAws className={iconClass} />,
  Android: <FaAndroid className={iconClass} />,
  Kotlin: <SiKotlin className={iconClass} />,
  'React Native': <FaReact className={iconClass} />
};
