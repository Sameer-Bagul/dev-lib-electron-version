import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NoteMetadata } from '../types';

interface PaginationProps {
  previousNote?: NoteMetadata;
  nextNote?: NoteMetadata;
}

export default function Pagination({ previousNote, nextNote }: PaginationProps) {
  return (
    <nav className="flex items-center justify-between border-t border-[var(--color-border)] mt-8 pt-6">
      {previousNote ? (
        <Link
          to={previousNote.path}
          className="group flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
        >
          <ChevronLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <div>
            <div className="text-sm">Previous</div>
            <div className="font-medium">{previousNote.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextNote && (
        <Link
          to={nextNote.path}
          className="group flex items-center text-right text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
        >
          <div>
            <div className="text-sm">Next</div>
            <div className="font-medium">{nextNote.title}</div>
          </div>
          <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </nav>
  );
}