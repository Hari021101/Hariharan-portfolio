import React from 'react';
import { Mail, MapPin, Phone, Code, Briefcase, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        Let's <span className="text-gradient">Connect</span>
      </h2>
      <div className="glass-panel contact-info">
        <a href="mailto:Hari.be2023@gmail.com" className="contact-item">
          <div className="contact-icon">
            <Mail size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Business Email</div>
            <div style={{ fontWeight: '500' }}>Hari.be2023@gmail.com</div>
          </div>
        </a>
        
        <a href="tel:+916383594264" className="contact-item">
          <div className="contact-icon">
            <Phone size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Contact Phone</div>
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
            <div style={{ fontWeight: '500' }}>Hari021101 (Hariharan M)</div>
          </div>
        </a>
        
        <a href="https://www.linkedin.com/in/hariharan0211/" target="_blank" rel="noopener noreferrer" className="contact-item">
          <div className="contact-icon">
            <Briefcase size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>LinkedIn</div>
            <div style={{ fontWeight: '500' }}>Hariharan M</div>
          </div>
        </a>

        <a href="https://hariharan-portfolio-liard-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-item">
          <div className="contact-icon">
            <Globe size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Live Portfolio</div>
            <div style={{ fontWeight: '500' }}>hariharan-portfolio-liard-nine.vercel.app</div>
          </div>
        </a>
      </div>
    </div>
  );
}
