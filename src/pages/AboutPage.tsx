import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Palette, Terminal, MapPin, ArrowUpRight } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { skillCategories } from '@/content/skills';
import { pageVariants, staggerContainer, staggerItem } from '@/components/motion/variants';

export function AboutPage() {
  return (
    <AppShell>
      <motion.article
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full max-w-xl mx-auto px-6 pt-28 pb-24 text-neutral-800 dark:text-neutral-200"
      >
        {/* Editorial Heading matching screenshot structure */}
        <header className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-neutral-900 dark:text-white">
            <span>Hello, I'm Girish a</span>{' '}
            <span className="inline-flex items-center justify-center align-middle mx-1 p-1 rounded-md bg-white/10 text-amber-300">
              <Palette size={18} />
            </span>{' '}
            <span>designer</span>
            <br />
            <span>and</span>{' '}
            <span className="inline-flex items-center justify-center align-middle mx-1 p-1 rounded-md bg-white/10 text-cyan-300">
              <Terminal size={18} />
            </span>{' '}
            <span>builder based in</span>{' '}
            <span className="inline-flex items-center justify-center align-middle mx-1 p-1 rounded-md bg-white/10 text-rose-300">
              <MapPin size={18} />
            </span>{' '}
            <span>Pune</span>
          </h1>

          {/* Lead intro */}
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-4 leading-relaxed">
            {profile.shortBio}
          </p>
        </header>

        {/* Extended Biography */}
        <section className="space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pb-10 border-b border-black/5 dark:border-white/10">
          {profile.editorialBio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </section>

        {/* Projects Section */}
        <section className="py-10 border-b border-black/5 dark:border-white/10">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
            Projects
          </h2>
          <p className="text-xs text-neutral-500 mb-6">
            Beyond client and portfolio work, I craft digital tools and developer utilities that solve real everyday problems.
          </p>

          <div className="space-y-6">
            {projects.map((proj) => (
              <div key={proj.slug} className="group">
                <Link
                  to={`/projects/${proj.slug}`}
                  className="flex items-baseline justify-between gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-500 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span>{proj.title}</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 shrink-0 font-normal">
                    {proj.status.split('/')[0].trim()}
                  </span>
                </Link>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-normal">
                  {proj.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack Section */}
        <section className="py-10 border-b border-black/5 dark:border-white/10">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
            Stack
          </h2>
          <p className="text-xs text-neutral-500 mb-6">
            A curated collection of design tools, frameworks, browser runtimes, and engineering resources I actively work with.
          </p>

          <div className="space-y-6">
            {skillCategories.slice(0, 5).map((category, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {category.skills.join(' · ')}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/skills"
              className="inline-flex items-center gap-1 text-xs text-blue-500 hover:underline font-medium"
            >
              <span>View full technical skills matrix</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-10 border-b border-black/5 dark:border-white/10">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
            Core Values
          </h2>
          <p className="text-xs text-neutral-500 mb-6">
            Guiding principles that govern how I design interfaces, write code, and release software.
          </p>

          <div className="space-y-4">
            {profile.values.map((val, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-10 border-b border-black/5 dark:border-white/10">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
            Education
          </h2>
          <div className="space-y-4 mt-4">
            {profile.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start gap-4 text-xs">
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{edu.qualification}</h3>
                  <p className="text-neutral-500">{edu.institution}</p>
                </div>
                <span className="font-mono text-[10px] text-neutral-400 shrink-0">{edu.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section className="pt-10">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
            Approach
          </h2>
          <ol className="space-y-2 mt-4 text-xs text-neutral-600 dark:text-neutral-400 list-decimal list-inside leading-relaxed">
            {profile.approach.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      </motion.article>
    </AppShell>
  );
}
