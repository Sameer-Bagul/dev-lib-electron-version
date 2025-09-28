import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/ThemeContext';
import { FocusedModeProvider } from './contexts/FocusedModeContext';
import App from './App';
import './index.css';
import './styles/theme.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <FocusedModeProvider>
        <App />
      </FocusedModeProvider>
    </ThemeProvider>
  </StrictMode>
);