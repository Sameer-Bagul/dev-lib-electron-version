import React from 'react';
import Sidebar from './Sidebar';
import { useTheme } from '../contexts/ThemeContext';
import { useFocusedMode } from '../contexts/FocusedModeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const { isFocused } = useFocusedMode();

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="flex">
        {!isFocused && <Sidebar />}

        <main className={`flex-1 ${isFocused ? '' : 'ml-64 p-8'} bg-[var(--color-bg-primary)]`}>
          <div className={`${isFocused ? 'w-full' : 'max-w-7xl mx-auto'}`}>{children}</div>
        </main>
      </div>
    </div>
  );
}
