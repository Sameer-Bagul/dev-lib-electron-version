import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import Pagination from './Pagination';
import { getAdjacentNotes } from '../utils/noteUtils';

interface NoteContentProps {
  content: string;
  path: string;
}

export default function NoteContent({ content, path }: NoteContentProps) {
  const { previous, next } = getAdjacentNotes('/' + (path || ''));

  return (
    <>
      <MarkdownRenderer content={content} />
      <Pagination
        previousNote={previous}
        nextNote={next}
      />
    </>
  );
}