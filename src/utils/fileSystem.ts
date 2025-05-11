import { NoteMetadata, CategoryStructure } from '../types';

// Get all markdown files recursively
const markdownFiles = import.meta.glob('/src/data/notes/**/*.md', { 
  as: 'raw',
  eager: true 
});

export function buildFileStructure(): CategoryStructure {
  const structure: CategoryStructure = {};
  
  // Process each markdown file path
  Object.keys(markdownFiles).forEach(filePath => {
    // Remove base path and file extension
    const relativePath = filePath
      .replace('/src/data/notes/', '')
      .replace('.md', '');
      
    const parts = relativePath.split('/');
    const category = parts[0];
    
    if (!structure[category]) {
      structure[category] = {
        name: formatName(category),
        subcategories: {},
        notes: []
      };
    }
    
    if (parts.length === 2) {
      // Direct category note
      structure[category].notes.push(createNoteMetadata(parts[1], category));
    } else if (parts.length >= 3) {
      // Subcategory note
      const subcategory = parts[1];
      const noteId = parts[2];
      
      if (!structure[category].subcategories[subcategory]) {
        structure[category].subcategories[subcategory] = {
          name: formatName(subcategory),
          notes: []
        };
      }
      
      structure[category].subcategories[subcategory].notes.push(
        createNoteMetadata(noteId, category, subcategory)
      );
    }
  });
  
  return structure;
}

function createNoteMetadata(
  id: string, 
  category: string, 
  subcategory?: string
): NoteMetadata {
  const path = subcategory 
    ? `/${category}/${subcategory}/${id}`
    : `/${category}/${id}`;
    
  return {
    id,
    title: formatName(id),
    path,
    chapter: getChapterNumber(id),
    icon: getIconForNote(category, id)
  };
}

function formatName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getChapterNumber(id: string): number {
  const match = id.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : 1;
}

function getIconForNote(category: string, id: string): string {
  const iconMap: Record<string, string> = {
    'frontend': 'Layout',
    'backend': 'Server',
    'devops': 'Cloud',
    'getting-started': 'BookOpen',
    'fundamentals': 'Book',
    'advanced': 'Zap',
    'testing': 'TestTube',
    'deployment': 'Rocket'
  };
  
  return iconMap[id.toLowerCase()] || iconMap[category.toLowerCase()] || 'FileText';
}

export async function getNoteContent(path: string): Promise<string> {
  const fullPath = `/src/data/notes${path}.md`;
  
  try {
    return markdownFiles[fullPath] || '';
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '';
  }
}