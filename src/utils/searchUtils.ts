import { NoteMetadata } from '../types';
import { getAllNotes } from './navigationUtils';

export function searchNotes(query: string): NoteMetadata[] {
  if (!query.trim()) return [];

  const searchTerm = query.toLowerCase();
  const allNotes = getAllNotes();
  
  return allNotes.filter(note => 
    note.title.toLowerCase().includes(searchTerm) ||
    note.id.toLowerCase().includes(searchTerm)
  );
}