import { Link } from 'react-router-dom';
import { profile } from '@/content/profile';
import { Theme } from '@/hooks/useTheme';

interface SiteFooterProps {
  theme: Theme;
}

export function SiteFooter({ theme }: SiteFooterProps) {
  const isDark = theme === 'dark';

  return (
    <footer
      className="w-full border-t py-12 px-6 transition-colors duration-200"
      style={{
        borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#888888]">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-medium text-[#f5f5f5] dark:text-[#f5f5f5] light:text-[#111111]" style={{ color: isDark ? '#f5f5f5' : '#111111' }}>
            {profile.displayName}
          </span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>{profile.headline.split('·')[0].trim()}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link to="/" className="hover:text-white transition-colors duration-150">
            Home
          </Link>
          <Link to="/projects" className="hover:text-white transition-colors duration-150">
            Projects
          </Link>
          <Link to="/about" className="hover:text-white transition-colors duration-150">
            About
          </Link>
          <Link to="/skills" className="hover:text-white transition-colors duration-150">
            Skills
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors duration-150">
            Contact
          </Link>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-150"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-6 text-center text-[11px] opacity-40">
        © {new Date().getFullYear()} {profile.fullName}. Built with React, TypeScript & Motion.
      </div>
    </footer>
  );
}
