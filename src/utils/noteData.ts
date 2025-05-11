import { NoteMetadata } from '../types';

export const notesByPath: Record<string, NoteMetadata> = {
  '/frontend/getting-started/introduction': {
    id: 'introduction',
    title: 'Introduction to Frontend Development',
    path: '/frontend/getting-started/introduction',
    chapter: 1,
    icon: 'BookOpen',
  },
  '/frontend/html/fundamentals': {
    id: 'html-fundamentals',
    title: 'HTML Fundamentals',
    path: '/frontend/html/fundamentals',
    chapter: 2,
    icon: 'Code',
  },
  '/frontend/css/fundamentals': {
    id: 'css-fundamentals',
    title: 'CSS Fundamentals',
    path: '/frontend/css/fundamentals',
    chapter: 3,
    icon: 'Palette',
  },
  '/frontend/javascript/basics': {
    id: 'javascript-basics',
    title: 'JavaScript Basics',
    path: '/frontend/javascript/basics',
    chapter: 4,
    icon: 'FileCode2',
  },
  '/frontend/javascript/advanced': {
    id: 'javascript-advanced',
    title: 'Advanced JavaScript',
    path: '/frontend/javascript/advanced',
    chapter: 5,
    icon: 'Code2',
  },
};