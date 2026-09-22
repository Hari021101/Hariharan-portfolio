import React from 'react';
import { Award } from 'lucide-react';

export default function Experience() {
  return (
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
          <div className="exp-date">June 2023 – Present</div>
          
          {/* COTS Solutions */}
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
              Commercial Off-The-Shelf (COTS) Solutions
            </h4>
            <div className="exp-date" style={{ marginBottom: '0.75rem' }}>Apr 2024 – Till Date</div>
            <div className="skill-tags" style={{ marginBottom: '1rem' }}>
              <span className="skill-tag">.NET Core</span>
              <span className="skill-tag">Web API</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">MVC</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">Kafka</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">ServiceNow</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Claude</span>
              <span className="skill-tag">MS Azure</span>
            </div>
            <div className="exp-desc">
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Food COTS is a strategic enterprise initiative by Tyson Foods to modernize and streamline business operations by transitioning from custom-built legacy applications to Commercial Off-The-Shelf (COTS) solutions.
              </p>
              <ul>
                <li>Joined the Food COTS engagement and progressed from platform support into a development-focused role, contributing to feature builds, UI development, and API enhancements across the application suite.</li>
                <li>Developed React.js UI components and RESTful API integrations for ESP and MRS new modules using ASP.NET Core Web API.</li>
                <li>Designed and implemented backend business logic and API endpoints using C# and ASP.NET Core, following clean, Object-Oriented (OOP) design principles.</li>
                <li>Built and shipped feature enhancements across enterprise-grade .NET applications (MRS, FOPS, ESP, eShop, FMR, FMS, Liquid UI), contributing to 99.9%+ availability for global users.</li>
                <li>Optimized SQL Server queries and database performance for key business operations.</li>
                <li>Performed advanced troubleshooting and defect resolution across application, API, and database layers.</li>
                <li>Partnered with Business, QA, and Infrastructure teams to plan, build, and stabilize high-priority releases.</li>
                <li>Contributed to incident management and root cause analysis (RCA) as part of the broader engineering workflow, improving system stability and reducing recurring issues.</li>
                <li>Authored technical documentation and runbooks to support ongoing development and knowledge sharing, while coordinating ServiceNow (Incidents, Changes) in alignment with ITIL and SLA/audit compliance.</li>
              </ul>
            </div>
          </div>

          {/* uFACTS */}
          <div style={{ marginTop: '3rem' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
              uFACTS - Cloud Modernization
            </h4>
            <div className="exp-date" style={{ marginBottom: '0.75rem' }}>July 2023 – Mar 2024</div>
            <div className="skill-tags" style={{ marginBottom: '1rem' }}>
              <span className="skill-tag">.Net Core</span>
              <span className="skill-tag">Web API</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">Kafka</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Copilot</span>
              <span className="skill-tag">MS Azure</span>
            </div>
            <div className="exp-desc">
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                uFACTS is a web-based application used by government agencies to manage Unemployment Insurance programs — covering claims processing, employer tax management, benefits, and monetary/non-monetary determinations, with eligibility validated against employer details, work history, wages, and government policy rules.
              </p>
              <ul>
                <li>Contributed as a Full Stack Developer across backend, frontend, API integration, and database operations.</li>
                <li>Developed REST APIs and implemented core business logic using ASP.NET Core Web API and C#.</li>
                <li>Built and integrated React.js frontend components with backend services.</li>
                <li>Wrote and optimized SQL queries for claims, benefits, and eligibility data.</li>
                <li>Implemented and integrated microservices and API-based solutions, ensuring effective communication between different uFACTS modules and services.</li>
                <li>Participated in the complete Software Development Life Cycle (SDLC) within an Agile/Scrum environment, including requirement analysis, development, testing, deployment, and production support.</li>
                <li>Identified and resolved application defects, performance issues, and production incidents through debugging, root-cause analysis, and implementation of effective solutions.</li>
                <li>Collaborated with cross-functional teams, QA engineers, business analysts, and developers to deliver features, perform code reviews, and ensure high-quality solutions within sprint timelines.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RVS Consulting - Training & Internship */}
        <div className="timeline-item glass-panel">
          <div className="timeline-dot"></div>
          <h3 className="exp-role">.NET Full Stack Development with React</h3>
          <div className="exp-company">Internship – RVS Consulting, Thanjavur</div>
          <div className="exp-date">Training & Internship Program (1 Year)</div>
          
          <div className="skill-tags" style={{ marginBottom: '1.25rem' }}>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">C#</span>
            <span className="skill-tag">.NET Core</span>
            <span className="skill-tag">SQL Server</span>
          </div>

          <div className="exp-desc">
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>3 Months – React JS Training:</strong> Completed comprehensive training in React JS, including components, hooks, state management, routing, API integration, and reusable UI development.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>6 Months – .NET Full Stack Training:</strong> Gained hands-on experience in C#, .NET Core, ASP.NET Core Web API, SQL Server, Entity Framework/ADO.NET, REST APIs, and full-stack application development.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>3 Months – Real-Time Project Internship:</strong> Applied technical knowledge in a real-time project environment, contributing to application development, API integration, database operations, debugging, testing, and feature enhancements.
              </li>
              <li>
                Gained practical experience in frontend and backend development, working across the complete application development lifecycle.
              </li>
            </ul>

            <div style={{ 
              marginTop: '1.5rem', 
              padding: '1rem 1.25rem', 
              background: 'rgba(59, 130, 246, 0.08)', 
              borderRadius: '12px', 
              border: '1px solid rgba(59, 130, 246, 0.25)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem' 
            }}>
              <Award size={22} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <strong>Certification:</strong> .NET Full Stack Development with React – Training & Internship Certificate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
