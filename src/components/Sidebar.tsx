import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { getCategories, getNotesByCategory, getSubcategories, getNotesBySubcategory } from '../utils/navigationUtils';

export default function Sidebar() {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [expandedSubcategories, setExpandedSubcategories] = useState<Record<string, boolean>>({});
  
  const categories = getCategories();

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleSubcategory = (subcategory: string) => {
    setExpandedSubcategories(prev => ({
      ...prev,
      [subcategory]: !prev[subcategory]
    }));
  };

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[var(--color-sidebar)] border-r border-[var(--color-border)] overflow-y-auto">
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">DevNotes</h1>
        </Link>
        
        <nav className="space-y-2">
          {categories.map(category => {
            const isExpanded = expandedCategories[category];
            const subcategories = getSubcategories(category);
            const categoryNotes = getNotesByCategory(category);

            return (
              <div key={category} className="space-y-1">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  <span className="flex-1 text-left text-sm font-medium">{category}</span>
                </button>

                {isExpanded && (
                  <div className="ml-4 space-y-1">
                    {/* Direct category notes */}
                    {categoryNotes.map(note => (
                      <Link
                        key={note.id}
                        to={note.path.slice(1)}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${
                          location.pathname === '/' + note.path.slice(1)
                            ? 'bg-[var(--color-accent)] text-white'
                            : 'text-[var(--color-text-tertiary)] hover:bg-[var(--color-bg-secondary)]'
                        }`}
                      >
                        <span>{note.title}</span>
                      </Link>
                    ))}

                    {/* Subcategories */}
                    {subcategories.map(subcategory => {
                      const isSubcategoryExpanded = expandedSubcategories[subcategory];
                      const subcategoryNotes = getNotesBySubcategory(category, subcategory);

                      return (
                        <div key={subcategory} className="space-y-1">
                          <button
                            onClick={() => toggleSubcategory(subcategory)}
                            className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
                          >
                            {isSubcategoryExpanded ? (
                              <ChevronDown className="w-3 h-3" />
                            ) : (
                              <ChevronRight className="w-3 h-3" />
                            )}
                            <span className="flex-1 text-left text-sm">{subcategory}</span>
                          </button>

                          {isSubcategoryExpanded && (
                            <div className="ml-4 space-y-1">
                              {subcategoryNotes.map(note => (
                                <Link
                                  key={note.id}
                                  to={note.path.slice(1)}
                                  className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${
                                    location.pathname === '/' + note.path.slice(1)
                                      ? 'bg-[var(--color-accent)] text-white'
                                      : 'text-[var(--color-text-tertiary)] hover:bg-[var(--color-bg-secondary)]'
                                  }`}
                                >
                                  <span>{note.title}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}