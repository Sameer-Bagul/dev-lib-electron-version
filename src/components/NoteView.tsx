import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';
import TableOfContents from './TableOfContents';
import Pagination from './Pagination';
import ProgressBar from './ProgressBar';
import { Clock, Calendar, BookOpen } from 'lucide-react';
import { 
  extractTableOfContents, 
  formatDate, 
  getReadingTime,
  getAdjacentNotes,
} from '../utils/noteUtils';
import { getNoteContent } from '../utils/fileSystem';

export default function NoteView() {
  const { '*': path } = useParams(); // Use catch-all parameter
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [currentSection, setCurrentSection] = useState('');
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
  const readingTime = getReadingTime(content);
  const { previous, next } = getAdjacentNotes('/' + (path || ''));

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

  return (
    <>
      <ProgressBar />
      <div className="grid grid-cols-12 gap-8">
        <article className="col-span-12 lg:col-span-9 bg-[var(--color-card)] rounded-lg border border-[var(--color-border)] p-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-tertiary)] mb-8">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(new Date().toISOString())}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{path?.split('/').slice(0, -1).join(' / ')}</span>
            </div>
          </div>
          
          <MarkdownRenderer content={content} />
          
          <Pagination
            previousNote={previous}
            nextNote={next}
          />
        </article>
        
        <aside className="hidden lg:block lg:col-span-3">
          <TableOfContents items={toc} currentSection={currentSection} />
        </aside>
      </div>
    </>
  );
}