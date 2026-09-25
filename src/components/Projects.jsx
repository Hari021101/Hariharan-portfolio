import React, { useState } from 'react';
import { Code, ExternalLink, Globe, ChevronDown, Layers, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  // State for toggling project details (roles, responsibilities, architecture)
  const [expandedProjects, setExpandedProjects] = useState({
    beatbox: false,
    revenuemetrics: false
  });

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const projects = [
    {
      id: 'beatbox',
      title: 'BeatBox',
      subtitle: 'Premium E-Commerce Platform',
      badge: 'Full-Stack Application',
      summary: 'Full-featured enterprise-grade e-commerce application engineered with ASP.NET Core Web API, React.js, and SQL Server. Features secure JWT authentication, real-time notifications via SignalR, and an administrative order management dashboard.',
      links: [
        { label: 'Live Demo', url: 'https://office-project-beat-box-front-end.vercel.app/', icon: Globe, primary: true },
        { label: 'Swagger API', url: 'https://beatbox-api.runasp.net/swagger/index.html', icon: ExternalLink },
        { label: 'Frontend Repo', url: 'https://github.com/Hari021101', icon: Code },
        { label: 'Backend Repo', url: 'https://github.com/Hari021101', icon: Code },
      ],
      tags: [
        'ASP.NET Core', 'React.js', 'SQL Server', 'Entity Framework Core',
        'Clean Architecture', 'JWT', 'Redux Toolkit', 'SignalR', 'Azure', 'AI Chatbot'
      ],
      responsibilities: [
        'Architected and developed modular REST APIs using ASP.NET Core Web API following Clean Architecture.',
        'Engineered dynamic, highly responsive React.js frontend with Redux Toolkit state management.',
        'Implemented JWT authentication with role-based authorization for customers and admins.',
        'Integrated SignalR hub for instant, bidirectional real-time order status updates.',
        'Built full-featured Admin Dashboard for product catalog, stock inventory, and order fulfillment.',
        'Implemented Repository Pattern and Entity Framework Core with optimized relational schemas.'
      ]
    },
    {
      id: 'revenuemetrics',
      title: 'Revenue Metrics API',
      subtitle: 'Multi-Source Data Integration Platform',
      badge: 'Backend & Data Engine',
      summary: 'High-throughput data aggregation backend engine built with .NET 9 and Supabase PostgreSQL. Automates background synchronization pipelines across HubSpot, Stripe, and Google Calendar with fault-tolerant upsert logic.',
      links: [
        { label: 'GitHub Repo', url: 'https://github.com/Hari021101/RevenueMetrics', icon: Code },
        { label: 'Live API Docs', url: 'https://revenuemetrics.onrender.com', icon: ExternalLink, primary: true },
      ],
      tags: [
        '.NET 9', 'ASP.NET Core Web API', 'Clean Architecture', 'EF Core',
        'PostgreSQL', 'Background Services', 'REST APIs', 'Git', 'Docker'
      ],
      responsibilities: [
        'Developed a fault-tolerant multi-provider sync pipeline integrating HubSpot CRM, Stripe, and Google Calendar.',
        'Implemented incremental synchronization with idempotent upsert algorithms to ensure zero duplicate records.',
        'Built fast RESTful analytical endpoints for revenue summaries and breakdown analytics.',
        'Automated asynchronous background sync cycles using .NET IHostedService background workers.',
        'Containerized the entire application with Docker and deployed to Render with cloud PostgreSQL.',
        'Applied Clean Architecture, strict Dependency Injection, and Repository Pattern for maintainability.'
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header-block">
        <h2 className="section-title">
          Personal Learning <span className="text-gradient">Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications showcasing modern architecture, full-stack .NET & React skills, and cloud integrations.
        </p>
      </div>
      
      <div className="projects-container">
        {projects.map((project) => {
          const isExpanded = expandedProjects[project.id];
          return (
            <div key={project.id} className="project-card glass-panel">
              {/* Card Header */}
              <div className="project-header">
                <div>
                  <div className="project-badge">
                    <Layers size={13} /> {project.badge}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-category">{project.subtitle}</div>
                </div>

                {/* Project Links / CTAs */}
                <div className="project-links-grid">
                  {project.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a 
                        key={link.label}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`btn project-link-btn ${link.primary ? 'btn-primary-subtle' : 'btn-secondary'}`}
                        title={link.label}
                      >
                        <Icon size={16} /> <span>{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* General Project Summary (Visible by default) */}
              <p className="project-summary">
                {project.summary}
              </p>

              {/* Tech Stack Tags */}
              <div className="skill-tags project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>

              {/* Interactive View More Toggle */}
              <div className="project-toggle-container">
                <button
                  type="button"
                  className={`btn-view-more ${isExpanded ? 'active' : ''}`}
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isExpanded}
                >
                  <span className="btn-view-more-text">
                    {isExpanded 
                      ? 'Hide Architecture & Responsibilities' 
                      : `View Architecture & Responsibilities (${project.responsibilities.length} details)`}
                  </span>
                  <ChevronDown size={18} className={`btn-view-more-icon ${isExpanded ? 'rotated' : ''}`} />
                </button>
              </div>

              {/* Expandable Role & Responsibilities Details */}
              <div className={`project-details-collapse ${isExpanded ? 'expanded' : ''}`}>
                <div className="project-details-inner">
                  <h4 className="project-responsibilities-title">
                    Key Features, Roles & Architectural Highlights:
                  </h4>
                  <ul className="project-responsibilities-list">
                    {project.responsibilities.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="responsibility-bullet-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
