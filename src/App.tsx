import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NoteView from './components/NoteView';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import { useTheme } from './contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

function App() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Router>
      <Layout>
        <div className="flex items-center justify-between mb-8">
          <SearchBar />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-[var(--color-accent)]" />
            ) : (
              <Moon className="w-5 h-5 text-[var(--color-accent)]" />
            )}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoteView />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;