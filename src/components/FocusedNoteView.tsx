import React, { useEffect, useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { ThemeProvider } from '../contexts/ThemeContext';
import { X } from 'lucide-react';

export default function FocusedNoteView() {
  const [content, setContent] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await (window as unknown as Window & { api: { invoke: (channel: string, data?: unknown) => Promise<unknown> } }).api.invoke('get-focused-data') as { content: string; theme: 'light' | 'dark' };
        if (data) {
          setContent(data.content);
          setTheme(data.theme);
        }
      } catch (error) {
        console.error('Error loading focused data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleClose = () => {
    window.close();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[var(--color-accent)]"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] ${theme}`}>
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors z-10"
            aria-label="Close focused window"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="p-8 pt-16">
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}