import { buildFileStructure } from './fileSystem';
import { CategoryStructure, NoteMetadata } from '../types';

let fileStructure: CategoryStructure | null = null;

export function getFileStructure(): CategoryStructure {
  if (!fileStructure) {
    fileStructure = buildFileStructure();
  }
  return fileStructure;
}

export function getCategories(): string[] {
  const structure = getFileStructure();
  return Object.keys(structure).map(key => structure[key].name);
}

export function getSubcategories(category: string): string[] {
  const structure = getFileStructure();
  const categoryKey = Object.keys(structure).find(
    key => structure[key].name === category
  );
  
  if (!categoryKey) return [];
  
  return Object.keys(structure[categoryKey].subcategories).map(
    key => structure[categoryKey].subcategories[key].name
  );
}

export function getNotesByCategory(category: string): NoteMetadata[] {
  const structure = getFileStructure();
  const categoryKey = Object.keys(structure).find(
    key => structure[key].name === category
  );
  
  if (!categoryKey) return [];
  
  return structure[categoryKey].notes;
}

export function getNotesBySubcategory(
  category: string, 
  subcategory: string
): NoteMetadata[] {
  const structure = getFileStructure();
  const categoryKey = Object.keys(structure).find(
    key => structure[key].name === category
  );
  
  if (!categoryKey) return [];
  
  const subcategoryKey = Object.keys(structure[categoryKey].subcategories).find(
    key => structure[categoryKey].subcategories[key].name === subcategory
  );
  
  if (!subcategoryKey) return [];
  
  return structure[categoryKey].subcategories[subcategoryKey].notes;
}

export function getAllNotes(): NoteMetadata[] {
  const structure = getFileStructure();
  const allNotes: NoteMetadata[] = [];
  
  Object.values(structure).forEach(category => {
    allNotes.push(...category.notes);
    Object.values(category.subcategories).forEach(subcategory => {
      allNotes.push(...subcategory.notes);
    });
  });
  
  return allNotes.sort((a, b) => a.chapter - b.chapter);
}

export function getAdjacentNotes(currentPath: string): {
  previous?: NoteMetadata;
  next?: NoteMetadata;
} {
  const allNotes = getAllNotes();
  const currentIndex = allNotes.findIndex(note => note.path === currentPath);
  
  if (currentIndex === -1) return {};
  
  return {
    previous: currentIndex > 0 ? allNotes[currentIndex - 1] : undefined,
    next: currentIndex < allNotes.length - 1 ? allNotes[currentIndex + 1] : undefined
  };
}