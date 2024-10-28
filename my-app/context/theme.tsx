import { createContext, useState, useContext, useRef, ReactNode } from 'react';
import '../styles/theme.scss';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  themeRef: React.RefObject<HTMLDivElement>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);

    if (themeRef.current) {
      if (!isDarkMode) {
        themeRef.current.classList.add('dark-mode');
      } else {
        themeRef.current.classList.remove('dark-mode');
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeRef }}>
      <div ref={themeRef}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Hook để sử dụng theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme phải được sử dụng trong ThemeProvider');
  }
  return context;
};
