import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Link
      to={`/note/${note.id}`}
      className="block p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-200/20 hover:bg-white/20 transition-all"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{note.title}</h3>
      <p className="text-gray-300 mb-4 line-clamp-2">{note.content.substring(0, 150)}...</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{new Date(note.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4" />
          <div className="flex gap-2">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}