import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--border-glass)', marginTop: 'auto' }}>
      <p>© {new Date().getFullYear()} Hariharan M. All rights reserved.</p>
    </footer>
  );
}
