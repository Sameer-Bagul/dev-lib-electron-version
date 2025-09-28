import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';
import TableOfContents from './TableOfContents';
import ProgressBar from './ProgressBar';
import NoteMetadata from './NoteMetadata';
import NoteContent from './NoteContent';
import { X } from 'lucide-react';
import { extractTableOfContents } from '../utils/noteUtils';
import { getNoteContent } from '../utils/fileSystem';
import { useFocusedMode } from '../contexts/FocusedModeContext';

export default function NoteView() {
  const { '*': path } = useParams(); // Use catch-all parameter
  const navigate = useNavigate();
  const { isFocused, toggleFocused } = useFocusedMode();
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        if (path) {
          const noteContent = await getNoteContent('/' + path);
          if (!noteContent) {
            throw new Error('Note not found');
          }
          setContent(noteContent);
          setError('');
        }
      } catch (error) {
        console.error('Error loading note:', error);
        setError('Failed to load the note content.');
        setContent('');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadContent();
    window.scrollTo(0, 0);
  }, [path]);

  const toc = extractTableOfContents(content);

  const handleToggleFocused = () => {
    toggleFocused();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[var(--color-accent)]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Error Loading Note</h2>
        <p className="text-[var(--color-text-secondary)]">{error}</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  if (isFocused) {
    return (
      <div className="relative">
        <button
          onClick={handleToggleFocused}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors z-10"
          aria-label="Exit focused mode"
        >
          <X className="w-5 h-5" />
        </button>
        <div>
          <MarkdownRenderer content={content} />
        </div>
      </div>
    );
  }

  return (
    <>
      <ProgressBar />
      <div className="grid grid-cols-12 gap-8">
        <article className="col-span-12 lg:col-span-9 bg-[var(--color-card)] rounded-lg border border-[var(--color-border)] p-8">
          <NoteMetadata path={path || ''} content={content} onToggleFocused={handleToggleFocused} />
          <NoteContent content={content} path={path || ''} />
        </article>

        <aside className="hidden lg:block lg:col-span-3">
          <TableOfContents items={toc} currentSection="" />
        </aside>
      </div>
    </>
  );
}