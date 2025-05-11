import React from 'react';
import { Link } from 'react-router-dom';
import { NoteMetadata } from '../types';
import * as Icons from 'lucide-react';

interface NoteListProps {
  notes: NoteMetadata[];
  title: string;
}

export default function NoteList({ notes, title }: NoteListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => {
          const Icon = (Icons as any)[note.icon] || Icons.FileText;
          return (
            <Link
              key={note.id}
              to={note.path}
              className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-text-tertiary)]">
                  Chapter {note.chapter}
                </span>
              </div>
              <h3 className="font-medium text-[var(--color-text-primary)]">
                {note.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}