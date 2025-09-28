import React from 'react';
import Sidebar from './Sidebar';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="flex">
        <Sidebar />

        <main className="flex-1 ml-64 p-8 bg-[var(--color-bg-primary)]">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
