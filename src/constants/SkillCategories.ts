export type SkillCategory = {
  title: string;
  items: string[];
};

export const SkillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    items: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "BACKEND",
    items: ["Node", "Express", "Java", "Go", "SQL", "MongoDB"],
  },
  {
    title: "MOBILE",
    items: ["Android", "Kotlin", "React Native"],
  },
  {
    title: "TOOLS",
    items: ["AWS", "Linux", "Git", "GitHub"],
  },
];
