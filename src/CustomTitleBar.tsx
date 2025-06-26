import React from 'react';
import { X, Minus, Square, Sun, Moon } from "lucide-react";
import './CustomTitleBar.css';

interface CustomTitleBarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const CustomTitleBar: React.FC<CustomTitleBarProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="title-bar">
      <img src="/Logo SG.png" alt="Logo" className="title-bar-logo" />
      <span className="title-bar-title"></span>
      <div className="title-bar-controls">
        <button
          className="title-bar-btn theme-toggle"
          onClick={toggleTheme}
          aria-label="Vaihda teema"
          type="button"
        >
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
        </button>
        <button
          className="title-bar-btn"
          onClick={() => (window as any).electronAPI?.minimizeWindow()}
          aria-label="Pienennä"
          type="button"
        >
          <Minus size={22} />
        </button>
        <button
          className="title-bar-btn"
          onClick={() => (window as any).electronAPI?.maximizeWindow()}
          aria-label="Suurenna/Pienennä"
          type="button"
        >
          <Square size={18} />
        </button>
        <button
          className="title-bar-btn close"
          onClick={() => (window as any).electronAPI?.closeWindow()}
          aria-label="Sulje sovellus"
          type="button"
        >
          <X size={22} />
        </button>
      </div>
    </div>
  );
};

export default CustomTitleBar; 