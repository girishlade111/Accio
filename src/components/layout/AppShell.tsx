import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FloatingNavigation } from './FloatingNavigation';
import { SiteFooter } from './SiteFooter';
import { useTheme } from '@/hooks/useTheme';

interface AppShellProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function AppShell({ children, showFooter = true }: AppShellProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between relative selection:bg-white/20">
      {/* Skip to Content for WCAG 2.2 accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-lg outline-none"
      >
        Skip to main content
      </a>

      {/* Floating Header Navigation */}
      <FloatingNavigation theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>

      {/* Footer (hidden on minimal full-screen Home if desired, or styled cleanly) */}
      {showFooter && <SiteFooter theme={theme} />}
    </div>
  );
}
