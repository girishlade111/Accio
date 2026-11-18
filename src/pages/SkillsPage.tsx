import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { skillCategories } from '@/content/skills';
import { pageVariants, staggerContainer, staggerItem } from '@/components/motion/variants';

export function SkillsPage() {
  return (
    <AppShell>
      <motion.article
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full max-w-xl mx-auto px-6 pt-28 pb-24 text-neutral-800 dark:text-neutral-200"
      >
        <Link
          to="/about"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to About</span>
        </Link>

        {/* Heading */}
        <header className="mb-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
            Technical Matrix
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold mt-2 tracking-tight text-neutral-900 dark:text-white">
            Design thinking meets hands-on engineering.
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">
            My work crosses frontend architecture, interface design, full-stack integrations, browser runtimes, document workflows, and AI-assisted engineering. I choose technologies to fit the problem, not the other way around.
          </p>
        </header>

        {/* Categories Breakdown */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.section key={idx} variants={staggerItem} className="pb-6 border-b border-black/5 dark:border-white/10">
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
                {category.title}
              </h2>
              <p className="text-xs text-neutral-500 mt-1 mb-3">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-neutral-700 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Philosophies */}
        <div className="mt-12 space-y-6">
          <div className="p-5 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#141414]">
            <div className="flex items-center gap-2 mb-2 text-amber-500">
              <Sparkles size={16} />
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase font-mono tracking-wider">
                Design Philosophy
              </h3>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Modern, clean, responsive, and deliberately restrained. Strong hierarchy, readable typography, accessible contrast, comfortable whitespace, clear controls, and motion that supports comprehension rather than distracting from it.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#141414]">
            <div className="flex items-center gap-2 mb-2 text-cyan-500">
              <Terminal size={16} />
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase font-mono tracking-wider">
                Engineering Philosophy
              </h3>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Choose architectures around the real workflow. Prefer local processing where appropriate, introduce backends when persistence, shared data, or secure authentication actually require them, and consider portability, recovery, deployment, observability, and browser compatibility early.
            </p>
          </div>
        </div>

        {/* Evaluation notice */}
        <div className="mt-8 text-[11px] text-neutral-500 border-t border-black/5 dark:border-white/10 pt-4 leading-relaxed">
          <strong>Notice:</strong> These technologies represent a mixture of demonstrated project work, active use, continuous learning, and architectural evaluation. They are not to be interpreted as uniform mastery in every item.
        </div>
      </motion.article>
    </AppShell>
  );
}
