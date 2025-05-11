export interface NoteMetadata {
  id: string;
  title: string;
  path: string;
  chapter: number;
  icon: string;
}

export interface SubcategoryStructure {
  name: string;
  notes: NoteMetadata[];
}

export interface CategoryData {
  name: string;
  subcategories: Record<string, SubcategoryStructure>;
  notes: NoteMetadata[];
}

export interface CategoryStructure {
  [key: string]: CategoryData;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}