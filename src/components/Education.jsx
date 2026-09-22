import React from 'react';

export default function Education() {
  return (
    <div>
      <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <span className="text-gradient">Education Background</span>
      </h2>
      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Bachelor of Engineering</h4>
          <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>King College of Engineering, Pudukottai, TN, India</div>
          <div style={{ color: 'var(--text-muted)' }}>2019 – 2023 | CGPA: 8.01/10</div>
        </div>
        <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Higher Secondary Certificate (HSC)</h4>
          <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>St. Joseph’s Matric Hr. Sec School, Thanjavur, TN, India</div>
          <div style={{ color: 'var(--text-muted)' }}>2018 – 2019 | 63.8%</div>
        </div>
        <div className="timeline-item" style={{ marginBottom: '0' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Secondary School Leaving Certificate (SSLC)</h4>
          <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Kalyana Sundaram Hr. Sec School, Thanjavur, TN, India</div>
          <div style={{ color: 'var(--text-muted)' }}>2016 – 2017 | 76.4%</div>
        </div>
      </div>
    </div>
  );
}
