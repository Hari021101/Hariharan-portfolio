import React from 'react';
import { Mail, MapPin, Phone, Code, Briefcase, ExternalLink } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Business Email',
      value: 'Hari.be2023@gmail.com',
      href: 'mailto:Hari.be2023@gmail.com',
      icon: Mail,
      isExternal: false,
    },
    {
      label: 'Contact Phone',
      value: '+91 6383594264',
      href: 'tel:+916383594264',
      icon: Phone,
      isExternal: false,
    },
    {
      label: 'Location',
      value: 'India',
      href: null,
      icon: MapPin,
      isExternal: false,
    },
    {
      label: 'GitHub',
      value: 'Hari021101 (Hariharan M)',
      href: 'https://github.com/Hari021101',
      icon: Code,
      isExternal: true,
    },
    {
      label: 'LinkedIn',
      value: 'Hariharan M',
      href: 'https://www.linkedin.com/in/hariharan0211/',
      icon: Briefcase,
      isExternal: true,
    },
  ];

  return (
    <div className="contact-section-wrapper">
      <h2 className="section-title section-title-sub">
        Let's <span className="text-gradient">Connect</span>
      </h2>
      <div className="glass-panel contact-info">
        {contactLinks.map((item, idx) => {
          const Icon = item.icon;
          const content = (
            <>
              <div className="contact-icon">
                <Icon size={22} />
              </div>
              <div className="contact-details">
                <div className="contact-label">{item.label}</div>
                <div className="contact-val">{item.value}</div>
              </div>
              {item.isExternal && <ExternalLink size={16} className="contact-external-icon" />}
            </>
          );

          if (item.href) {
            return (
              <a 
                key={idx}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="contact-item"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={idx} className="contact-item contact-item-static">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
