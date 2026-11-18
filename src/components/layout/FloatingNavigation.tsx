import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Eye, Heart, Send, Sun, Moon } from 'lucide-react';
import { Theme } from '@/hooks/useTheme';
import { springTransition } from '@/components/motion/variants';

interface FloatingNavigationProps {
  theme: Theme;
  onToggleTheme: () => void;
}

interface NavItemDef {
  path: string;
  label: string;
  icon: typeof Home;
}

const navItems: NavItemDef[] = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/projects', label: 'Projects', icon: Eye },
  { path: '/about', label: 'About', icon: Heart },
  { path: '/contact', label: 'Contact', icon: Send },
];

export function FloatingNavigation({ theme, onToggleTheme }: FloatingNavigationProps) {
  const location = useLocation();

  const isNavActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      aria-label="Primary Navigation"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-2 py-1.5 rounded-full backdrop-blur-xl transition-all duration-300
        bg-[#181818]/90 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]
        dark:bg-[#181818]/90 dark:border-white/10 dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]
        light:bg-white/90 light:border-black/8 light:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(24, 24, 24, 0.92)' : 'rgba(255, 255, 255, 0.92)',
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)',
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isNavActive(item.path);

        return (
          <NavLink
            key={item.path}
            to={item.path}
            aria-label={item.label}
            aria-current={active ? 'page' : undefined}
            className="relative p-2.5 rounded-full transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {active && (
              <motion.div
                layoutId="navActiveCircle"
                transition={springTransition}
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
                }}
              />
            )}
            <span className="relative z-10 block">
              <Icon
                size={16}
                strokeWidth={2}
                className="transition-colors duration-200"
                style={{
                  color: active
                    ? (theme === 'dark' ? '#ffffff' : '#111111')
                    : (theme === 'dark' ? '#888888' : '#777777'),
                }}
              />
            </span>
          </NavLink>
        );
      })}

      {/* Vertical separator */}
      <div
        className="w-[1px] h-4 mx-0.5"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
        }}
      />

      {/* Theme Switcher Button */}
      <button
        type="button"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className="relative p-2.5 rounded-full transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:opacity-80"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === 'dark' ? (
            <motion.div
              key="sun"
              initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 45, scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={16} strokeWidth={2} className="text-white/80 hover:text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 45, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -45, scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={16} strokeWidth={2} className="text-black/80 hover:text-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </nav>
  );
}
