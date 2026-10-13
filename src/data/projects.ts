import { Code2, FileText, Layers3, MessageCircle, Database} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Project = {
  number: string;
  title: string;
  category: 'Web Development' | 'AI / Python' | 'Data Analysis' | 'Full Stack Development';
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
    status: 'Project Completed',
    link: 'https://github.com/Shubhankar-7029/Management-System-for-Company/tree/main/vite-project',
  },
  
  
  {
    number: '02',
    title: 'Blockchain Supply Chain DApp',
    category: 'Full Stack Development',
    description: 'A college project exploring blockchain-based supply-chain tracking with Solidity smart contracts and a web interface.',
    stack: ['Solidity', 'React', 'Truffle', 'Ganache'],
    icon: Code2,
    accent: 'violet',
    status: 'Project Completed',
    link: 'https://github.com/Shubhankar-7029/BWU-PROJECT-',

  },
  {
    number: '03',
    title: 'Responsive Navigation Bar',
    category: 'Web Development',
    description: 'An interactive desktop-style portfolio built with React and Vite, featuring a macOS-inspired navigation bar, interactive dock, draggable windows, GitHub integration, notes, resume viewer, Spotify interface, and command-line emulator.',
    stack: ['React', 'JavaScript', 'Vite', 'SCSS'],
    icon: Code2,
    accent: 'cyan',
    status: 'Project Completed',
    link: 'https://github.com/Shubhankar-7029/Navbar-',
  },

  {
    number: '04',
    title: 'Company Management System',
    category: 'Full Stack Development',
    description: 'A company management application designed to organize company information and streamline management operations through a user-friendly interface.',
    stack: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    icon: Code2,
    accent: 'cyan',
    status: 'Project Completed',
    link: 'https://github.com/Shubhankar-7029/Management-System-for-Company',
},

  {
    number: '05',
    title: 'AI Chat Bot',
    category: 'Full Stack Development',
    description: 'An interactive chatbot application designed to provide conversational responses through a user-friendly interface, demonstrating frontend development and chatbot functionality.',
    stack: ['JavaScript', 'HTML', 'CSS', 'AI / Chatbot'],
    icon: MessageCircle,
    accent: 'cyan',
    status: 'Project Completed',
    link: 'https://github.com/Shubhankar-7029/Chat-Bot',
  },

  {
    number: '06',
    title: 'Instagram Clone',
    category: 'Full Stack Development',
    description: 'A social media web application inspired by Instagram, featuring user authentication, image sharing, and an interactive interface for connecting with other users.',
    stack: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    icon: Database,
    accent: 'violet',
    status: 'Project Completed',
    link: 'https://github.com/Shubhankar-7029/Instagram-Clone-',
  },
]; 
