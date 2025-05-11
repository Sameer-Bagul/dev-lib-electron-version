import React from 'react';
import NoteList from './NoteList';
import { getNotesByCategory } from '../utils/navigationUtils';

export default function Home() {
  const gettingStartedNotes = getNotesByCategory('Getting Started');

  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          Welcome to DevNotes
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Your comprehensive resource for programming and development notes.
          Choose a category from the sidebar to get started.
        </p>
      </div>

      {gettingStartedNotes.length > 0 && (
        <NoteList title="Getting Started" notes={gettingStartedNotes} />
      )}
    </div>
  );
}