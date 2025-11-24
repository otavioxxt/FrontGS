import React, { createContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextValue = { theme: Theme; toggle: () => void };

export const ThemeContext = createContext<ThemeContextValue>({ theme: 'light', toggle: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // determine initial theme: localStorage -> system preference -> light
  const getInitial = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('site-theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    const m = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return m ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    // apply class strategy for Tailwind (dark mode = 'class')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    try { localStorage.setItem('site-theme', theme); } catch (e) {}
  }, [theme]);

  useEffect(() => {
    // listen to system changes and update only if user hasn't explicitly chosen (optional)
    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('site-theme');
      if (stored) return; // user preference wins
      setTheme(e.matches ? 'dark' : 'light');
    };
    if (mq && mq.addEventListener) mq.addEventListener('change', handler);
    else if (mq && (mq as any).addListener) (mq as any).addListener(handler);
    return () => {
      if (mq && mq.removeEventListener) mq.removeEventListener('change', handler);
      else if (mq && (mq as any).removeListener) (mq as any).removeListener(handler);
    };
  }, []);

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};
