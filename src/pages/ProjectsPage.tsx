import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/content/projects';
import { profile } from '@/content/profile';
import { pageVariants, staggerContainer, staggerItem } from '@/components/motion/variants';

export function ProjectsPage() {
  return (
    <AppShell>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full max-w-6xl mx-auto px-6 pt-28 pb-20"
      >
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
            Portfolio Gallery
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold mt-2 tracking-tight">
            Curated Work & Software
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
            A visual showcase of browser IDEs, local-first document processors, productivity utilities, and interactive web tools.
          </p>
        </div>

        {/* 3-Column Masonry Style Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Panel matching reference screenshot */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 w-full rounded-3xl p-8 sm:p-14 text-center border border-black/5 dark:border-white/10 bg-white dark:bg-[#141414] shadow-sm relative overflow-hidden"
        >
          {/* Subtle background ambient typography */}
          <div
            aria-hidden="true"
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl sm:text-9xl font-black text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none tracking-tighter"
          >
            LADESTACK
          </div>

          <div className="relative z-10 max-w-md mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Like what you see?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2.5 leading-relaxed">
              Explore more open source software, experiments, and developer utilities on GitHub, or get in touch to discuss a project.
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium transition-all shadow-md shadow-blue-500/20 active:scale-95"
              >
                <span>View GitHub</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-medium transition-all active:scale-95"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social coordinate tags */}
            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-400">
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                github.com/girishlade111
              </a>
              <span>·</span>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                linkedin.com/in/girish-lade
              </a>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </AppShell>
  );
}
