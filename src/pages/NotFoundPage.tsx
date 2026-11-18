import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AppShell } from '@/components/layout/AppShell';
import { pageVariants } from '@/components/motion/variants';

export function NotFoundPage() {
  return (
    <AppShell showFooter={false}>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2">
          Page not found.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-sm">
          The page may have moved, or the link may be incomplete.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-xs font-medium transition-colors"
          >
            View Projects
          </Link>
        </div>
      </motion.div>
    </AppShell>
  );
}
