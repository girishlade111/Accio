import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types';
import { ProjectCardVisual } from './ProjectCardVisual';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/50 dark:bg-[#141414] shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View project details for ${project.title}`}
        className="block w-full h-full p-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-3xl"
      >
        {/* Visual Artwork Showcase */}
        <div className="w-full rounded-2xl overflow-hidden">
          <ProjectCardVisual
            theme={project.cardStyle.theme}
            title={project.title}
            category={project.category}
          />
        </div>

        {/* Card Metadata Footer */}
        <div className="p-3.5 flex items-center justify-between">
          <div className="min-w-0 pr-2">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-blue-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
              {project.category}
            </p>
          </div>

          <div className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
