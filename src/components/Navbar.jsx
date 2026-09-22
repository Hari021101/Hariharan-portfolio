import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar({ isDark, setIsDark, isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <header className="header">
        <div className="logo text-gradient">HM</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="btn btn-secondary" 
            style={{ padding: '0.5rem', borderRadius: '50%' }}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="mobile-menu-toggle btn btn-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ padding: '0.5rem', borderRadius: '50%', display: 'none' }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#experience" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </>
  );
}
