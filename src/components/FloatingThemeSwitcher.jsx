import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './FloatingThemeSwitcher.css';

const FloatingThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="theme-switcher" onClick={toggleTheme}>
      <div className="switcher-track">
        <div className="switcher-thumb">
          <span className="icon-sun">☀</span>
          <span className="icon-moon">☽</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingThemeSwitcher;
