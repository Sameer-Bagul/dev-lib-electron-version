import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchNotes } from '../utils/searchUtils';
import { NoteMetadata } from '../types';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NoteMetadata[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === '/' && !isOpen) {
        event.preventDefault();
        searchRef.current?.querySelector('input')?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      const searchResults = searchNotes(value);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative flex-1 max-w-lg">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-tertiary)]" />
        <input
          type="text"
          placeholder="Search notes... (Press '/' to focus)"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="absolute w-full mt-2 py-2 bg-[var(--color-card)] rounded-lg shadow-lg border border-[var(--color-border)] z-50 max-h-[400px] overflow-y-auto">
          {results.map((result) => (
            <Link
              key={result.id}
              to={result.path.slice(1)}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-[var(--color-card-hover)] text-[var(--color-text-primary)] transition-colors"
            >
              <div className="font-medium">{result.title}</div>
              <div className="text-sm text-[var(--color-text-tertiary)]">
                {result.path.split('/').slice(0, -1).join(' / ')}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}