import { NoteMetadata } from '../types';
import { notesByPath } from './noteData';

export function getSubjects(): string[] {
  return ['Frontend Development'];
}

export function getTopicsBySubject(subject: string): string[] {
  if (!subject) return [];
  
  switch (subject.toLowerCase()) {
    case 'frontend development':
      return ['Getting Started', 'HTML', 'CSS', 'JavaScript'];
    default:
      return [];
  }
}

export function getNotesByTopic(subject: string, topic: string): NoteMetadata[] {
  if (!subject || !topic) return [];

  const allNotes = Object.values(notesByPath);
  const pathSegment = topic.toLowerCase().replace(/\s+/g, '-');
  
  return allNotes
    .filter(note => note.path.includes(`/${pathSegment}/`))
    .sort((a, b) => a.chapter - b.chapter);
}

export function getAdjacentNotes(currentPath: string): { 
  previous?: NoteMetadata; 
  next?: NoteMetadata; 
} {
  if (!currentPath) return { previous: undefined, next: undefined };

  const allNotes = Object.values(notesByPath).sort((a, b) => a.chapter - b.chapter);
  const currentIndex = allNotes.findIndex(note => note.path === currentPath);
  
  if (currentIndex === -1) return { previous: undefined, next: undefined };
  
  return {
    previous: currentIndex > 0 ? allNotes[currentIndex - 1] : undefined,
    next: currentIndex < allNotes.length - 1 ? allNotes[currentIndex + 1] : undefined
  };
}