import './ShowcaseWork.css';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const projects = [
  { icon: '🌐', title: 'Portfolio Website', desc: 'A modern, animated portfolio site.' },
  { icon: '🛒', title: 'E-commerce App', desc: 'A scalable, secure online store.' },
  { icon: '📊', title: 'Analytics Dashboard', desc: 'A real-time, interactive dashboard.' },
];

export default function ShowcaseWork() {
  const gridRef = useRef();
  useEffect(() => {
    if (gridRef.current) {
      VanillaTilt.init(gridRef.current.querySelectorAll('.showcase-card'), {
        max: 12,
        speed: 400,
        glare: true,
        'max-glare': 0.18,
        scale: 1.04,
      });
    }
  }, []);
  return (
    <div className="showcase-section">
      <div className="showcase-gradient" />
      <video className="showcase-bg" src="/showcase work.mp4" autoPlay loop muted playsInline />
      <div className="showcase-grid" ref={gridRef}>
        {projects.map((p, i) => (
          <div className="showcase-card" key={i} tabIndex={0} aria-label={p.title}>
            <span className="showcase-icon" aria-label={p.title}>{p.icon}</span>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 