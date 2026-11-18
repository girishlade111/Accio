import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Building high-performance, responsive, accessible web interfaces.',
    skills: ['TypeScript', 'JavaScript (ESNext)', 'React 19', 'Astro', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML5 / Modern DOM', 'Motion (Framer Motion)']
  },
  {
    title: 'UI/UX & Design Systems',
    description: 'Crafting thoughtful information architecture, typography, and fluid micro-interactions.',
    skills: ['Interface Prototyping', 'Figma-Oriented Workflows', 'Design Tokens', 'Design Systems', 'WCAG 2.2 Accessibility', 'Responsive Layouts', 'Micro-Interactions']
  },
  {
    title: 'Backend & Integration',
    description: 'Designing clean server endpoints, API schemas, and persistence models.',
    skills: ['Node.js', 'REST APIs', 'Serverless Functions', 'Authentication Patterns', 'Supabase', 'Firebase', 'PostgreSQL Concepts', 'Database Schema Modeling']
  },
  {
    title: 'Browser-Native Computing',
    description: 'Leveraging modern browser runtimes for local execution and data handling.',
    skills: ['Monaco Editor', 'WebContainers', 'IndexedDB & localStorage', 'Web Workers', 'HTML5 Canvas', 'Blob & ArrayBuffer APIs', 'WebAssembly Concepts']
  },
  {
    title: 'Documents & Publishing',
    description: 'Processing structured document formats, mathematical typesetting, and publishing.',
    skills: ['Markdown & GFM', 'PDF.js & pdf-lib', 'KaTeX Math Typesetting', 'Syntax Highlighting', 'ZIP Generation', 'Print CSS Layouts']
  },
  {
    title: 'Developer Workflow & Operations',
    description: 'Maintaining dependable code quality, continuous deployment, and testing.',
    skills: ['Git & GitHub Workflows', 'CI/CD Pipelines', 'Vercel Deployment', 'ESLint & Prettier', 'Technical Documentation', 'Issue Triage & Root Cause Analysis']
  },
  {
    title: 'Performance & Internationalization',
    description: 'Ensuring fast load times, discoverability, and multilingual reach.',
    skills: ['Core Web Vitals Optimization', 'Semantic HTML', 'SEO & Structured Data', 'Multi-Locale i18n Routing', 'Zero Layout Shift Design']
  },
  {
    title: 'AI-Assisted Engineering',
    description: 'Employing coding agents and model APIs thoughtfully and responsibly.',
    skills: ['Prompt Engineering & Orchestration', 'Coding-Agent Workflows', 'BYOK (Bring Your Own Key) Design', 'Multi-Provider Evaluation', 'Responsible Verification']
  }
];
