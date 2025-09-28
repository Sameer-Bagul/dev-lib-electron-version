import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FocusedModeContextType {
  isFocused: boolean;
  toggleFocused: () => void;
}

const FocusedModeContext = createContext<FocusedModeContextType | undefined>(undefined);

export const useFocusedMode = () => {
  const context = useContext(FocusedModeContext);
  if (!context) {
    throw new Error('useFocusedMode must be used within a FocusedModeProvider');
  }
  return context;
};

interface FocusedModeProviderProps {
  children: ReactNode;
}

export const FocusedModeProvider: React.FC<FocusedModeProviderProps> = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);

  const toggleFocused = () => {
    setIsFocused(prev => !prev);
  };

  return (
    <FocusedModeContext.Provider value={{ isFocused, toggleFocused }}>
      {children}
    </FocusedModeContext.Provider>
  );
};