import { NoteMetadata } from '../types';
import { notesByPath } from './noteData';

export function searchNotes(query: string): NoteMetadata[] {
  if (!query) return [];

  const searchTerm = query.toLowerCase().trim();
  
  return Object.values(notesByPath)
    .filter(note => 
      note.title.toLowerCase().includes(searchTerm) ||
      note.id.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => a.chapter - b.chapter);
}