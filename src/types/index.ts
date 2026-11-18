export type ProjectStatus =
  | 'Public Brand'
  | 'Open Source'
  | 'Repository-Documented'
  | 'Experimental / Verification Pending';

export interface ProjectUseCase {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  shortDescription: string;
  overview: string;
  url: string;
  repository?: string;
  stack: string[];
  capabilities: string[];
  useCases: [ProjectUseCase, ProjectUseCase, ProjectUseCase];
  limitations?: string;
  cardStyle: {
    aspect: 'square' | 'tall' | 'wide' | 'standard';
    theme: 'purple-shield' | 'dark-stats' | 'retro-mac' | 'game-cottage' | 'icons-grid' | 'warm-plans' | 'feature-metrics' | 'gradient-silhouette' | 'context-menu' | 'dark-editor' | 'blue-symbols' | 'canyon-mine' | 'calendar-card' | 'terminal-code' | 'mystery-block' | 'blue-ambient';
    accentColor?: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}
