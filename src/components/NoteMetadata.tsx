import React from 'react';
import { Clock, Calendar, BookOpen, Maximize2 } from 'lucide-react';
import { formatDate, getReadingTime } from '../utils/noteUtils';

interface NoteMetadataProps {
  path: string;
  content: string;
  onToggleFocused: () => void;
}

export default function NoteMetadata({ path, content, onToggleFocused }: NoteMetadataProps) {
  const readingTime = getReadingTime(content);

  return (
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
      <button
        onClick={onToggleFocused}
        className="flex items-center gap-1 p-1 rounded hover:bg-[var(--color-bg-secondary)] transition-colors"
        title="Toggle focused mode"
      >
        <Maximize2 className="w-4 h-4" />
        <span>Focus</span>
      </button>
    </div>
  );
}