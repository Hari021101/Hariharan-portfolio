import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  // Theme effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="app-container">
      <div className="bg-mesh"></div>
      
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        
        {/* Education & Contact Section */}
        <section id="contact" className="section">
          <div className="grid-2">
            <Education />
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
