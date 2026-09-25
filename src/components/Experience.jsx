import React, { useState } from 'react';
import { Award, ChevronDown, CheckCircle2, Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const [expandedRoles, setExpandedRoles] = useState({
    cots: false,
    ufacts: false
  });

  const toggleRole = (roleKey) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [roleKey]: !prev[roleKey]
    }));
  };

  const cotsBullets = [
    'Joined the Food COTS engagement and progressed from platform support into a development-focused role, contributing to feature builds, UI development, and API enhancements across the application suite.',
    'Developed React.js UI components and RESTful API integrations for ESP and MRS new modules using ASP.NET Core Web API.',
    'Designed and implemented backend business logic and API endpoints using C# and ASP.NET Core, following clean, Object-Oriented (OOP) design principles.',
    'Built and shipped feature enhancements across enterprise-grade .NET applications (MRS, FOPS, ESP, eShop, FMR, FMS, Liquid UI), contributing to 99.9%+ availability for global users.',
    'Optimized SQL Server queries and database performance for key business operations.',
    'Performed advanced troubleshooting and defect resolution across application, API, and database layers.',
    'Partnered with Business, QA, and Infrastructure teams to plan, build, and stabilize high-priority releases.',
    'Contributed to incident management and root cause analysis (RCA) as part of the broader engineering workflow, improving system stability and reducing recurring issues.',
    'Authored technical documentation and runbooks to support ongoing development and knowledge sharing, while coordinating ServiceNow (Incidents, Changes) in alignment with ITIL and SLA/audit compliance.'
  ];

  const ufactsBullets = [
    'Contributed as a Full Stack Developer across backend, frontend, API integration, and database operations.',
    'Developed REST APIs and implemented core business logic using ASP.NET Core Web API and C#.',
    'Built and integrated React.js frontend components with backend services.',
    'Wrote and optimized SQL queries for claims, benefits, and eligibility data.',
    'Implemented and integrated microservices and API-based solutions, ensuring effective communication between different uFACTS modules and services.',
    'Participated in the complete Software Development Life Cycle (SDLC) within an Agile/Scrum environment, including requirement analysis, development, testing, deployment, and production support.',
    'Identified and resolved application defects, performance issues, and production incidents through debugging, root-cause analysis, and implementation of effective solutions.',
    'Collaborated with cross-functional teams, QA engineers, business analysts, and developers to deliver features, perform code reviews, and ensure high-quality solutions within sprint timelines.'
  ];

  return (
    <section id="experience" className="section">
      <div className="section-header-block">
        <h2 className="section-title">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="section-subtitle">
          Track record of shipping reliable, enterprise-scale software across manufacturing, insurance, and logistics.
        </p>
      </div>
      
      <div className="timeline">
        {/* NEXXOFT INFOTEL - Current */}
        <div className="timeline-item glass-panel">
          <div className="timeline-dot"></div>
          
          <div className="exp-header-info">
            <span className="exp-company-badge">
              <Briefcase size={14} /> Full-time Employment
            </span>
            <h3 className="exp-role">Associate Software Consultant</h3>
            <div className="exp-company">NEXXOFT INFOTEL</div>
            <div className="exp-date">
              <Calendar size={14} /> June 2023 – Present
            </div>
          </div>
          
          {/* COTS Solutions */}
          <div className="exp-subproject-card">
            <div className="exp-subproject-header">
              <h4 className="exp-subproject-title">
                Commercial Off-The-Shelf (COTS) Solutions
              </h4>
              <div className="exp-subproject-duration">Apr 2024 – Present</div>
            </div>

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
              <span className="skill-tag">MS Azure</span>
            </div>

            <p className="exp-overview-text">
              Food COTS is a strategic enterprise initiative by Tyson Foods to modernize and streamline business operations by transitioning from custom-built legacy applications to Commercial Off-The-Shelf (COTS) solutions.
            </p>

            {/* Always visible top highlights */}
            <ul className="exp-highlights-list">
              <li>
                <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                <span>{cotsBullets[0]}</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                <span>{cotsBullets[1]}</span>
              </li>
            </ul>

            {/* Toggle Button for remaining responsibilities */}
            <div className="project-toggle-container">
              <button
                type="button"
                className={`btn-view-more ${expandedRoles.cots ? 'active' : ''}`}
                onClick={() => toggleRole('cots')}
                aria-expanded={expandedRoles.cots}
              >
                <span className="btn-view-more-text">
                  {expandedRoles.cots 
                    ? 'Hide Roles & Responsibilities' 
                    : `View All Roles & Responsibilities & Contributions (${cotsBullets.length - 2} more)`}
                </span>
                <ChevronDown size={18} className={`btn-view-more-icon ${expandedRoles.cots ? 'rotated' : ''}`} />
              </button>
            </div>

            {/* Expandable Remaining Responsibilities */}
            <div className={`project-details-collapse ${expandedRoles.cots ? 'expanded' : ''}`}>
              <div className="project-details-inner">
                <ul className="exp-highlights-list" style={{ marginTop: '0.75rem' }}>
                  {cotsBullets.slice(2).map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* uFACTS */}
          <div className="exp-subproject-card" style={{ marginTop: '2.5rem' }}>
            <div className="exp-subproject-header">
              <h4 className="exp-subproject-title">
                uFACTS - Cloud Modernization
              </h4>
              <div className="exp-subproject-duration">July 2023 – Mar 2024</div>
            </div>

            <div className="skill-tags" style={{ marginBottom: '1rem' }}>
              <span className="skill-tag">.Net Core</span>
              <span className="skill-tag">Web API</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">Kafka</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">MS Azure</span>
            </div>

            <p className="exp-overview-text">
              uFACTS is a web-based application used by government agencies to manage Unemployment Insurance programs — covering claims processing, employer tax management, benefits, and monetary/non-monetary determinations.
            </p>

            {/* Always visible top highlights */}
            <ul className="exp-highlights-list">
              <li>
                <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                <span>{ufactsBullets[0]}</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                <span>{ufactsBullets[1]}</span>
              </li>
            </ul>

            {/* Toggle Button for remaining responsibilities */}
            <div className="project-toggle-container">
              <button
                type="button"
                className={`btn-view-more ${expandedRoles.ufacts ? 'active' : ''}`}
                onClick={() => toggleRole('ufacts')}
                aria-expanded={expandedRoles.ufacts}
              >
                <span className="btn-view-more-text">
                  {expandedRoles.ufacts 
                    ? 'Hide Roles & Responsibilities' 
                    : `View All Roles & Responsibilities & Contributions (${ufactsBullets.length - 2} more)`}
                </span>
                <ChevronDown size={18} className={`btn-view-more-icon ${expandedRoles.ufacts ? 'rotated' : ''}`} />
              </button>
            </div>

            {/* Expandable Remaining Responsibilities */}
            <div className={`project-details-collapse ${expandedRoles.ufacts ? 'expanded' : ''}`}>
              <div className="project-details-inner">
                <ul className="exp-highlights-list" style={{ marginTop: '0.75rem' }}>
                  {ufactsBullets.slice(2).map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RVS Consulting - Training & Internship */}
        <div className="timeline-item glass-panel">
          <div className="timeline-dot"></div>
          
          <div className="exp-header-info">
            <span className="exp-company-badge">
              <Award size={14} /> Training & Internship
            </span>
            <h3 className="exp-role">.NET Full Stack Development with React</h3>
            <div className="exp-company">RVS Consulting, Thanjavur</div>
            <div className="exp-date">
              <Calendar size={14} /> 1 Year Training & Internship Program
            </div>
          </div>
          
          <div className="skill-tags" style={{ marginBottom: '1.25rem' }}>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">C#</span>
            <span className="skill-tag">.NET Core</span>
            <span className="skill-tag">SQL Server</span>
          </div>

          <div className="exp-desc">
            <ul className="exp-highlights-list">
              <li>
                <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                <span><strong style={{ color: 'var(--text-primary)' }}>React JS Training:</strong> Intensive training in components, hooks, state management, routing, and modern UI architectures.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                <span><strong style={{ color: 'var(--text-primary)' }}>.NET Full Stack Training:</strong> Core mastery in C#, .NET Core, ASP.NET Core Web API, SQL Server, Entity Framework, and REST APIs.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                <span><strong style={{ color: 'var(--text-primary)' }}>Real-Time Project Internship:</strong> Applied practical engineering across API development, database modeling, testing, and debugging.</span>
              </li>
            </ul>

            <div className="certificate-badge-box">
              <Award size={22} className="certificate-icon" />
              <span className="certificate-text">
                <strong>Certified:</strong> .NET Full Stack Development with React – Training & Internship Certificate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
