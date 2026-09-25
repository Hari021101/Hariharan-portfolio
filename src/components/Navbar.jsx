import React, { useEffect } from 'react';
import { Moon, Sun, Home, User, Briefcase, FolderGit2, Cpu, Mail, ChevronRight, ArrowLeft, X } from 'lucide-react';

export default function Navbar({ isDark, setIsDark, isMenuOpen, setIsMenuOpen }) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, setIsMenuOpen]);

  const desktopNavItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const mobileNavItems = [
    { label: 'Home', href: '#', icon: Home, isHome: true },
    { label: 'About', href: '#about', icon: User },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: FolderGit2 },
    { label: 'Skills', href: '#skills', icon: Cpu },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e, item) => {
    if (item.isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <a 
          href="#" 
          className="logo-container" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          <span className="logo text-gradient">HM</span>
          <span className="logo-subtitle">Hariharan M</span>
        </a>

        {/* Desktop Navigation */}
        <div className="header-actions">
          <nav className="nav-links">
            {desktopNavItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="theme-toggle-btn btn btn-secondary" 
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={19} className="theme-icon sun-icon" /> : <Moon size={19} className="theme-icon moon-icon" />}
          </button>

          {/* Animated 3-Bar Hamburger Toggle Button */}
          <button 
            className={`hamburger-btn ${isMenuOpen ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-box">
              <span className="hamburger-line line-top"></span>
              <span className="hamburger-line line-middle"></span>
              <span className="hamburger-line line-bottom"></span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`mobile-backdrop ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Modern Slide-over Mobile Drawer */}
      <div 
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-inner">
          {/* Top Bar inside Sidebar with Back & Close options */}
          <div className="mobile-menu-header">
            <button 
              className="mobile-back-btn" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Back to page"
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </button>

            <button 
              className="mobile-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links including Home */}
          <nav className="mobile-nav-links">
            {mobileNavItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a 
                  key={item.label}
                  href={item.href} 
                  className={`mobile-nav-link ${item.isHome ? 'mobile-nav-link-home' : ''}`} 
                  onClick={(e) => handleNavClick(e, item)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="mobile-nav-link-left">
                    <span className="mobile-nav-icon">
                      <Icon size={18} />
                    </span>
                    <span className="mobile-nav-label">{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="mobile-nav-arrow" />
                </a>
              );
            })}
          </nav>

          <div className="mobile-menu-footer">
            <a 
              href="#contact" 
              className="btn btn-primary mobile-cta-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch <ChevronRight size={16} />
            </a>

            <div className="mobile-theme-row">
              <span className="mobile-theme-label">
                Appearance: <strong>{isDark ? 'Dark Mode' : 'Light Mode'}</strong>
              </span>
              <button
                onClick={() => setIsDark(!isDark)}
                className="btn btn-secondary mobile-theme-btn"
                aria-label="Toggle color theme"
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
