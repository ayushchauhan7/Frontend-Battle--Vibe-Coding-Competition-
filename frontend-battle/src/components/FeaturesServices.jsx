import './FeaturesServices.css';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const features = [
  { icon: '⚡', title: 'Fast Performance', desc: 'Lightning fast load times and smooth interactions.' },
  { icon: '🎨', title: 'Modern Design', desc: 'Sleek, modern, and accessible UI for all users.' },
  { icon: '🔒', title: 'Secure', desc: 'Top-notch security for your data and privacy.' },
  { icon: '💬', title: '24/7 Support', desc: 'We are here for you, always.' },
];

export default function FeaturesServices() {
  const gridRef = useRef();
  useEffect(() => {
    if (gridRef.current) {
      VanillaTilt.init(gridRef.current.querySelectorAll('.feature-card'), {
        max: 12,
        speed: 400,
        glare: true,
        'max-glare': 0.18,
        scale: 1.04,
      });
    }
  }, []);
  return (
    <div className="features-section">
      <div className="features-gradient" />
      <video className="features-bg" src="/features-services.mp4" autoPlay loop muted playsInline />
      <div className="features-grid" ref={gridRef}>
        {features.map((f, i) => (
          <div className="feature-card" key={i} tabIndex={0} aria-label={f.title}>
            <span className="feature-icon" aria-label={f.title}>{f.icon}</span>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 