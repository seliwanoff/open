import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useThemeStore, type Theme } from '../stores/useThemeStore';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (t: Theme) => {
      if (t === 'system') {
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        root.classList.toggle('dark', prefersDark);
      } else {
        root.classList.toggle('dark', t === 'dark');
      }
    };

    applyTheme(theme);

    // Optional: listen to system changes when theme === "system"
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => theme === 'system' && applyTheme('system');
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  return <>{children}</>;
}
