import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { AppShell } from '@/components/layout/AppShell';
import { projects } from '@/content/projects';
import { ProjectCardVisual } from '@/components/projects/ProjectCardVisual';
import { pageVariants } from '@/components/motion/variants';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <AppShell>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <p className="text-sm text-neutral-500 mt-2">The project you are looking for does not exist.</p>
          <Link
            to="/projects"
            className="mt-6 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-medium hover:bg-blue-500"
          >
            Back to Projects
          </Link>
        </div>
      </AppShell>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <AppShell>
      <motion.article
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full max-w-4xl mx-auto px-6 pt-28 pb-20"
      >
        {/* Back Link */}
        <button
          type="button"
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white mb-8 transition-colors duration-150 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to Projects</span>
        </button>

        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                {project.category}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-neutral-400">
                {project.status}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {project.title}
            </h1>
          </div>

          {/* External Action Links */}
          <div className="flex items-center gap-2.5">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium shadow-md shadow-blue-500/20 transition-all active:scale-95"
              >
                <span>Live Website</span>
                <ExternalLink size={13} />
              </a>
            )}

            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-xs font-medium transition-all"
              >
                <GithubIcon size={13} />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual Hero Feature */}
        <div className="my-8 rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg">
          <div className="h-64 sm:h-80 w-full">
            <ProjectCardVisual
              theme={project.cardStyle.theme}
              title={project.title}
              category={project.category}
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="space-y-4 my-8">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Overview</h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Key Capabilities */}
        <div className="my-8 p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase font-mono tracking-wider mb-4">
            Key Capabilities
          </h3>
          <ul className="space-y-2.5">
            {project.capabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exactly 3 Practical Use Cases */}
        <div className="my-8 space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Practical Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#151515] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase">Case 0{idx + 1}</span>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mt-1 leading-snug">
                    {useCase.title}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div className="my-8">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase font-mono tracking-wider mb-3">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Limitations & Verification Notice */}
        {project.limitations && (
          <div className="my-8 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5 leading-relaxed">
            <AlertCircle size={16} className="shrink-0 mt-0.5 text-amber-500" />
            <div>
              <span className="font-semibold">Verification Notice: </span>
              {project.limitations}
            </div>
          </div>
        )}

        {/* Prev / Next Pagination */}
        <div className="mt-12 pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex flex-col text-left"
            >
              <span className="text-[10px] font-mono text-neutral-400 uppercase">Previous</span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-blue-500 transition-colors">
                ← {prevProject.title}
              </span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col text-right"
            >
              <span className="text-[10px] font-mono text-neutral-400 uppercase">Next</span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-blue-500 transition-colors">
                {nextProject.title} →
              </span>
            </Link>
          ) : <div />}
        </div>
      </motion.article>
    </AppShell>
  );
}
