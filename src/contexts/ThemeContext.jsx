import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme transition animation function
const switchTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Create overlay with new theme color
  const overlay = document.createElement('div');
  overlay.className = 'theme-transition-overlay';
  overlay.style.backgroundColor = 
    newTheme === 'light' ? '#faf6f0' : '#0d0a08';
  document.body.appendChild(overlay);
  
  // Trigger ripple from bottom-right (where button is)
  overlay.style.animation = 'themeReveal 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards';
  
  // Switch theme halfway through animation
  setTimeout(() => {
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }, 350);
  
  // Remove overlay after animation
  setTimeout(() => {
    overlay.remove();
  }, 750);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Use the smooth transition animation
    switchTheme();
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
