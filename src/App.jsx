import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, ChevronRight, Code, Briefcase, ExternalLink, Download, Moon, Sun, Menu, X } from 'lucide-react';
import profileImage from './assets/HariHaran Profile Pic.png';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; }
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
      
      {/* Navigation */}
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

      <main>
        {/* Hero Section */}
        <section id="about" className="section hero">
          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I'm <span className="text-gradient">Hariharan M</span>
              </h1>
              <h2 className="hero-subtitle" style={{ textTransform: 'none', letterSpacing: '0.5px', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '1.3rem', display: 'block', marginBottom: '0.5rem' }}>.NET Full Stack Developer</span>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '400' }}>ASP.NET Core/MVC, React, Azure, SQL <span style={{ margin: '0 0.5rem', color: 'var(--accent-primary)' }}>|</span> Git, TFS, DevOps, ServiceNow <span style={{ margin: '0 0.5rem', color: 'var(--accent-primary)' }}>|</span> <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>3+ Yrs Experience</span></span>
              </h2>
              <p className="hero-desc">
                .NET Full Stack Consultant — Application Support Specialist (L2/L3) & UI Developer with 3+ years building and maintaining enterprise-grade solutions in Microsoft technologies across Insurance, Logistics & Manufacturing. I turn complex production challenges into fast, reliable systems — from React interfaces to .NET Core APIs — and I'm currently looking for a Full Stack/Frontend role where I can own features end-to-end.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Get in Touch <ChevronRight size={20} />
                </a>
                <a href="#experience" className="btn btn-secondary">
                  View My Work
                </a>
                <a href="/Hariharan_M_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}>
                  <Download size={20} /> Resume
                </a>
              </div>
            </div>
            <div className="hero-image-container">
              <img src={profileImage} alt="Hariharan M" className="hero-image" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          
          <div className="timeline">
            {/* NEXXOFT INFOTEL - Current */}
            <div className="timeline-item glass-panel">
              <div className="timeline-dot"></div>
              <h3 className="exp-role">Associate Software Consultant</h3>
              <div className="exp-company">NEXXOFT INFOTEL</div>
              <div className="exp-date">June 2023 - Present</div>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Commercial Off-The-Shelf (COTS) Solutions</h4>
                <div className="exp-date">Oct 2024 – Present</div>
                <div className="skill-tags" style={{ marginBottom: '1rem' }}>
                  <span className="skill-tag">.NET Core</span>
                  <span className="skill-tag">Web API</span>
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Microservices</span>
                  <span className="skill-tag">ServiceNow</span>
                  <span className="skill-tag">MS Azure</span>
                </div>
                <div className="exp-desc">
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    A strategic enterprise initiative by Tyson Foods to modernize and streamline business operations by transitioning from custom-built legacy applications to COTS solutions.
                  </p>
                  <ul>
                    <li>Delivered L2/L3 production support for enterprise-grade .NET applications (MRS, FOPS, ESP, eShop, FMR, FMS, Liquid UI) ensuring 99.9%+ availability.</li>
                    <li>Developed React UI & API Integration for ESP and MRS new Modules.</li>
                    <li>Led incident management and RCA, reducing recurring production issues.</li>
                    <li>Implemented proactive monitoring, health checks, and log analysis minimizing downtime.</li>
                    <li>Optimized SQL queries and database performance.</li>
                    <li>Handled ServiceNow tickets (Incidents, Changes, Requests) in alignment with ITIL best practices.</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>UFacts - Cloud Modernization</h4>
                <div className="exp-date">July 2023 – Sep 2024</div>
                <div className="skill-tags" style={{ marginBottom: '1rem' }}>
                  <span className="skill-tag">.Net Core</span>
                  <span className="skill-tag">C#</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Microservices</span>
                  <span className="skill-tag">MS Azure</span>
                </div>
                <div className="exp-desc">
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    uFACTS is utilized to automate the Unemployment Insurance framework for Claims and Tax services offering comprehensive capabilities.
                  </p>
                  <ul>
                    <li>End to End process of Full Stack Development as part of Agile Methodology.</li>
                    <li>Created optimized and efficient API services and implemented complex logics.</li>
                    <li>Integrated APIs with the Frontend and managed the end-to-end flow.</li>
                    <li>Worked across multiple services like Benefits, Claims, Core, Employer, Monetary, NonMonetary.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">
            Personal Learning <span className="text-gradient">Projects</span>
          </h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* BeatBox */}
            <div className="glass-panel" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="exp-role">BeatBox</h3>
                  <div className="exp-company" style={{ color: 'var(--text-primary)' }}>Premium E-Commerce Platform</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href="https://github.com/Hari021101" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.9rem' }} title="Frontend Code Repo">
                    <Code size={18} style={{ marginRight: '0.25rem' }} /> Frontend
                  </a>
                  <a href="https://github.com/Hari021101" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.9rem' }} title="Backend Code Repo">
                    <Code size={18} style={{ marginRight: '0.25rem' }} /> Backend
                  </a>
                  <a href="https://beatbox-api.runasp.net" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.9rem' }} title="Live API: BeatBox - Premium Audio">
                    <ExternalLink size={18} style={{ marginRight: '0.25rem' }} /> Live
                  </a>
                </div>
              </div>
              
              <div className="skill-tags" style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
                <span className="skill-tag">ASP.NET Core</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">SQL Server</span>
                <span className="skill-tag">Entity Framework Core</span>
                <span className="skill-tag">Clean Architecture</span>
                <span className="skill-tag">JWT</span>
                <span className="skill-tag">Redux Toolkit</span>
                <span className="skill-tag">SignalR</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">AI Chatbot</span>
              </div>
              
              <div className="exp-desc">
                <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <li>Developed REST APIs using ASP.NET Core Web API.</li>
                  <li>Built responsive React.js user interfaces.</li>
                  <li>Implemented JWT-based authentication and role-based authorization.</li>
                  <li>Integrated SignalR for real-time order updates.</li>
                  <li>Developed an Admin Dashboard for product and order management.</li>
                  <li>Applied Clean Architecture, Entity Framework Core, and Repository Pattern.</li>
                </ul>
              </div>
            </div>

            {/* Revenue Metrics API */}
            <div className="glass-panel" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="exp-role">Revenue Metrics API</h3>
                  <div className="exp-company" style={{ color: 'var(--text-primary)' }}>Multi-Source Data Integration Platform</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href="https://github.com/Hari021101/RevenueMetrics" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.9rem' }} title="Code Repo">
                    <Code size={18} style={{ marginRight: '0.25rem' }} /> Repo
                  </a>
                  <a href="https://revenuemetrics.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.9rem' }} title="Live API">
                    <ExternalLink size={18} style={{ marginRight: '0.25rem' }} /> Live
                  </a>
                </div>
              </div>
              
              <div className="skill-tags" style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
                <span className="skill-tag">.NET 9</span>
                <span className="skill-tag">ASP.NET Core Web API</span>
                <span className="skill-tag">Clean Architecture</span>
                <span className="skill-tag">Entity Framework Core</span>
                <span className="skill-tag">PostgreSQL (Supabase)</span>
                <span className="skill-tag">Background Services</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
              </div>
              
              <div className="exp-desc">
                <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <li>Developed a fault-tolerant sync pipeline integrating HubSpot, Stripe, and Google Calendar.</li>
                  <li>Implemented incremental synchronization with idempotent upsert logic.</li>
                  <li>Built REST APIs for revenue summary and breakdown using .NET 9 Clean Architecture.</li>
                  <li>Automated background synchronization using IHostedService.</li>
                  <li>Containerized and deployed the application using Docker, PostgreSQL, and Render.</li>
                  <li>Applied Repository Pattern and Dependency Injection.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          
          <div className="grid-2">
            <div className="glass-panel">
              <div className="skill-category">
                <h4>Backend & Cloud</h4>
                <div className="skill-tags">
                  <span className="skill-tag">.NET Core</span>
                  <span className="skill-tag">C#</span>
                  <span className="skill-tag">ASP.NET MVC</span>
                  <span className="skill-tag">Web API</span>
                  <span className="skill-tag">Microservices</span>
                  <span className="skill-tag">MS Azure</span>
                  <span className="skill-tag">AWS S3</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Bootstrap</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Databases & ORM</h4>
                <div className="skill-tags">
                  <span className="skill-tag">SQL Server</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">NoSQL</span>
                  <span className="skill-tag">ADO.NET</span>
                  <span className="skill-tag">EF & EF Core</span>
                  <span className="skill-tag">LINQ</span>
                </div>
              </div>
            </div>

            <div className="glass-panel">
              <div className="skill-category">
                <h4>DevOps & Tools</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Azure DevOps</span>
                  <span className="skill-tag">Git / GitHub / GitLab</span>
                  <span className="skill-tag">CI/CD Pipelines</span>
                  <span className="skill-tag">ServiceNow</span>
                  <span className="skill-tag">Postman</span>
                  <span className="skill-tag">Visual Studio</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Methodologies & Skills</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Agile Scrum</span>
                  <span className="skill-tag">ITIL</span>
                  <span className="skill-tag">Incident Management</span>
                  <span className="skill-tag">System Architecture</span>
                  <span className="skill-tag">Client Interaction</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>AI & Developer Tools</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Claude</span>
                  <span className="skill-tag">Copilot</span>
                  <span className="skill-tag">ChatGPT</span>
                  <span className="skill-tag">Cursor AI</span>
                  <span className="skill-tag">Antigravity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume CTA Section */}
        <section className="section" style={{ padding: '2rem' }}>
          <div className="glass-panel" style={{ 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            borderColor: 'rgba(59, 130, 246, 0.2)'
          }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Want the full <span className="text-gradient">details?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              You can download my complete resume as a PDF to view my full background, additional skills, and professional summary offline.
            </p>
            <a href="/Hariharan_M_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Download size={20} /> Download Resume
            </a>
          </div>
        </section>

        {/* Education & Contact Section */}
        <section id="contact" className="section">
          <div className="grid-2">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <span className="text-gradient">Education</span>
              </h2>
              <div className="glass-panel" style={{ marginBottom: '2rem' }}>
                <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>BE Mechanical</h4>
                  <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>King College of Engineering, Pudukottai</div>
                  <div style={{ color: 'var(--text-muted)' }}>2019 - 2023 | CGPA: 8.01/10</div>
                </div>
                <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>HSC</h4>
                  <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>St. Joseph’s Matric Hr. Sec School, Thanjavur</div>
                  <div style={{ color: 'var(--text-muted)' }}>2018 - 2019 | 63.8%</div>
                </div>
                <div className="timeline-item" style={{ marginBottom: '0' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>SSLC</h4>
                  <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Kalyana Sundaram Hr. Sec School, Thanjavur</div>
                  <div style={{ color: 'var(--text-muted)' }}>2016 - 2017 | 76.4%</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <div className="glass-panel contact-info">
                <a href="mailto:mhariharan2019@gmail.com" className="contact-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</div>
                    <div style={{ fontWeight: '500' }}>Hari.be2023@gmail.com</div>
                  </div>
                </a>
                
                <a href="tel:+916383594264" className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Phone</div>
                    <div style={{ fontWeight: '500' }}>+91 6383594264</div>
                  </div>
                </a>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontWeight: '500' }}>India</div>
                  </div>
                </div>
                
                <a href="https://github.com/Hari021101" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon">
                    <Code size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>GitHub</div>
                    <div style={{ fontWeight: '500' }}>Hari021101</div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/hariharan0211/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>LinkedIn</div>
                    <div style={{ fontWeight: '500' }}>hariharan0211</div>
                  </div>
                </a>
                
                <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon">
                    <ExternalLink size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Naukri</div>
                    <div style={{ fontWeight: '500' }}>View Profile</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--border-glass)', marginTop: 'auto' }}>
        <p>© {new Date().getFullYear()} Hariharan M. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
