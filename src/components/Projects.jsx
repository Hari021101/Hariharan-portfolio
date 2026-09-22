import React from 'react';
import { Code, ExternalLink, Globe } from 'lucide-react';

export default function Projects() {
  return (
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
              <a 
                href="https://office-project-beat-box-front-end.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.9rem', borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }} 
                title="Live Demo: BeatBox E-Commerce"
              >
                <Globe size={18} style={{ marginRight: '0.25rem' }} /> Live Demo
              </a>
              <a 
                href="https://beatbox-api.runasp.net/swagger/index.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.9rem' }} 
                title="Swagger UI: BeatBox API Documentation"
              >
                <ExternalLink size={18} style={{ marginRight: '0.25rem' }} /> Swagger API
              </a>
              <a 
                href="https://github.com/Hari021101" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.9rem' }} 
                title="Frontend Code Repo"
              >
                <Code size={18} style={{ marginRight: '0.25rem' }} /> Frontend
              </a>
              <a 
                href="https://github.com/Hari021101" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.9rem' }} 
                title="Backend Code Repo"
              >
                <Code size={18} style={{ marginRight: '0.25rem' }} /> Backend
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
  );
}
