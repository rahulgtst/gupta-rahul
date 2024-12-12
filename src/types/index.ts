import { ReactElement } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: ReactElement;
} 