import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  currentSection?: string;
}

export default function TableOfContents({ items, currentSection }: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              document.querySelector(`[href="#${id}"]`)?.classList.add('text-[var(--color-accent)]');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('h1[id], h2[id], h3[id]').forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-8">
      <div className="bg-[var(--color-card)] rounded-lg border border-[var(--color-border)] overflow-hidden">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between p-4 text-[var(--color-text-primary)] hover:bg-[var(--color-card-hover)] transition-colors"
        >
          <span className="font-semibold">Table of Contents</span>
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
        
        {!isCollapsed && (
          <div className="p-4 pt-0">
            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
                >
                  <a
                    href={`#${item.id}`}
                    className={`text-sm block py-1 transition-colors ${
                      currentSection === item.id
                        ? 'text-[var(--color-accent)] font-medium'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}