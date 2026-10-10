import { Code2, Database, FileText, Layers3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Project = {
  number: string;
  title: string;
  category: 'Web Development' | 'AI / Python' | 'Data Analysis';
  description: string;
  stack: string[];
  icon: LucideIcon;
  accent: string;
  status: string;
  link?: string;
};

// To add a project, copy one object and edit its fields. Link is optional.
export const projects: Project[] = [
  {
    number: '01',
    title: 'eBook Management System',
    category: 'Web Development',
    description: 'A web application project involving React components, interface work, and login UI development.',
    stack: ['React', 'TypeScript', 'JavaScript', 'SCSS'],
    icon: Layers3,
    accent: 'violet',
    status: 'Project work',
  },
  {
    number: '02',
    title: 'AI Research Paper Summarizer',
    category: 'AI / Python',
    description: 'A Flask-based project concept for summarizing research papers from PDFs, using Python PDF extraction and an AI API integration.',
    stack: ['Python', 'Flask', 'PyPDF2', 'AI API'],
    icon: FileText,
    accent: 'blue',
    status: 'Project work',
  },
  {
    number: '03',
    title: 'Social Media & Academic Impact',
    category: 'Data Analysis',
    description: 'An academic data-analysis project exploring social media usage and its relationship to academic impact, with reporting and visualization.',
    stack: ['Data Analysis', 'Excel', 'Visualization'],
    icon: Database,
    accent: 'cyan',
    status: 'Academic project',
  },
  {
    number: '04',
    title: 'Blockchain Supply Chain DApp',
    category: 'Web Development',
    description: 'A college project exploring blockchain-based supply-chain tracking with Solidity smart contracts and a web interface.',
    stack: ['Solidity', 'React', 'Truffle', 'Ganache'],
    icon: Code2,
    accent: 'violet',
    status: 'College project',
  },
];
