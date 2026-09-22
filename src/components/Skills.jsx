import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        Technical & Professional <span className="text-gradient">Skills</span>
      </h2>
      
      <div className="grid-2">
        {/* Technical Core */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="skill-category">
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Backend & ORM</h4>
            <div className="skill-tags">
              <span className="skill-tag">.NET Core</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">ASP.NET</span>
              <span className="skill-tag">ASP.NET MVC</span>
              <span className="skill-tag">ASP.NET Web API</span>
              <span className="skill-tag">LINQ</span>
              <span className="skill-tag">ADO.NET</span>
              <span className="skill-tag">EF & EF Core</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Frontend</h4>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Bootstrap</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Databases & Architecture</h4>
            <div className="skill-tags">
              <span className="skill-tag">SQL Server</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">NoSQL</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">N-Tier Architecture</span>
              <span className="skill-tag">MVC</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Cloud & Messaging</h4>
            <div className="skill-tags">
              <span className="skill-tag">Microsoft Azure (Blob, VMs, Functions, App Service)</span>
              <span className="skill-tag">AWS S3</span>
              <span className="skill-tag">Kafka</span>
              <span className="skill-tag">MSMQ</span>
            </div>
          </div>
        </div>

        {/* DevOps, Tools & Professional Skills */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="skill-category">
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>DevOps, CI/CD & ITSM</h4>
            <div className="skill-tags">
              <span className="skill-tag">Azure DevOps</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">GitLab</span>
              <span className="skill-tag">TFS</span>
              <span className="skill-tag">CI/CD Pipelines</span>
              <span className="skill-tag">ServiceNow (Incident, Change & Request)</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Monitoring & Tools</h4>
            <div className="skill-tags">
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Visual Studio</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">SSMS</span>
              <span className="skill-tag">Developer Tools</span>
              <span className="skill-tag">SonarQube & Azure</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>AI & Developer Productivity Tools</h4>
            <div className="skill-tags">
              <span className="skill-tag">Claude</span>
              <span className="skill-tag">Copilot</span>
              <span className="skill-tag">ChatGPT</span>
              <span className="skill-tag">Cursor AI</span>
              <span className="skill-tag">Antigravity</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Professional & Methodologies</h4>
            <div className="skill-tags">
              <span className="skill-tag">Agile Scrum</span>
              <span className="skill-tag">ITIL</span>
              <span className="skill-tag">SDLC</span>
              <span className="skill-tag">DevOps Practices</span>
              <span className="skill-tag">System Architecture</span>
              <span className="skill-tag">Requirement Analysis</span>
              <span className="skill-tag">Incident Management</span>
              <span className="skill-tag">Maintenance & Monitoring</span>
              <span className="skill-tag">Client Interaction</span>
              <span className="skill-tag">Product Development</span>
              <span className="skill-tag">Deployment & Support</span>
              <span className="skill-tag">Documentation & Reporting</span>
              <span className="skill-tag">IT Policies & Procedures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
