import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { NoteMetadata } from '../types';

interface ChapterNavigationProps {
  previousChapter?: NoteMetadata;
  nextChapter?: NoteMetadata;
}

export default function ChapterNavigation({ previousChapter, nextChapter }: ChapterNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
      {previousChapter ? (
        <Link
          to={previousChapter.path}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <div>
            <div className="text-sm">Previous Chapter</div>
            <div className="text-base font-medium">{previousChapter.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      
      {nextChapter && (
        <Link
          to={nextChapter.path}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-right group"
        >
          <div>
            <div className="text-sm">Next Chapter</div>
            <div className="text-base font-medium">{nextChapter.title}</div>
          </div>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}