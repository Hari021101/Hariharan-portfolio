import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      institution: 'Kings College of Engineering, Pudukkottai, TN, India',
      duration: '2019 – 2023',
      score: 'CGPA: 8.01 / 10',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'St. Joseph’s Matric Hr. Sec School, Thanjavur, TN, India',
      duration: '2018 – 2019',
      score: 'Score: 63.8%',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Kalyana Sundaram Hr. Sec School, Thanjavur, TN, India',
      duration: '2016 – 2017',
      score: 'Score: 76.4%',
    },
  ];

  return (
    <div className="education-section-wrapper">
      <h2 className="section-title section-title-sub">
        Education <span className="text-gradient">Background</span>
      </h2>
      <div className="glass-panel education-panel">
        {educationList.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-icon-wrap">
              <GraduationCap size={20} className="education-icon" />
            </div>
            <div className="education-details">
              <h3 className="education-degree">{item.degree}</h3>
              <div className="education-institution">{item.institution}</div>
              <div className="education-meta">
                <span className="education-duration">{item.duration}</span>
                <span className="education-divider">•</span>
                <span className="education-score">{item.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
