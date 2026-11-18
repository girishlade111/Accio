import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { heroLineVariants, inlineIconVariants, pageVariants } from '@/components/motion/variants';

export function HomePage() {
  return (
    <AppShell showFooter={false}>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          {/* Main Hero Headline matching screenshot lockup */}
          <motion.h1
            variants={heroLineVariants}
            className="text-2xl sm:text-3xl md:text-[34px] font-semibold leading-[1.3] sm:leading-[1.35] tracking-tight transition-colors duration-200"
          >
            <span>Girish Lade is a UI/UX Designer</span>{' '}
            <motion.span
              variants={inlineIconVariants}
              whileHover="hover"
              className="inline-flex items-center justify-center align-middle mx-1.5 p-1 rounded-md bg-white/10 dark:bg-white/10 text-amber-300 dark:text-amber-300 shadow-sm"
              title="Design & UI"
            >
              <Sparkles size={18} strokeWidth={2.2} />
            </motion.span>{' '}
            <span>and founder</span>
            <br className="hidden sm:inline" />
            <span> of LadeStack</span>{' '}
            <motion.span
              variants={inlineIconVariants}
              whileHover="hover"
              className="inline-flex items-center justify-center align-middle mx-1.5 p-1 rounded-md bg-white/10 dark:bg-white/10 text-cyan-300 dark:text-cyan-300 shadow-sm"
              title="Full-Stack Engineering"
            >
              <Terminal size={18} strokeWidth={2.2} />
            </motion.span>{' '}
            <span>crafting bold digital experiences.</span>
          </motion.h1>

          {/* Secondary Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-[#888888] font-normal mt-4 max-w-lg leading-relaxed"
          >
            His work blends engineering and aesthetics, building practical, accessible software for developers, students, and creators.
          </motion.p>

          {/* Understated Contextual Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={14} className="opacity-70" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-transparent text-[#888888] hover:text-white transition-colors duration-200"
            >
              <span>About Girish</span>
              <ArrowUpRight size={14} className="opacity-50" />
            </Link>
          </motion.div>
        </div>

        {/* Subtle Bottom Ambient Tagline */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] text-[#555555] tracking-wider uppercase font-mono">
          Pune, India · Independent Developer
        </div>
      </motion.div>
    </AppShell>
  );
}
