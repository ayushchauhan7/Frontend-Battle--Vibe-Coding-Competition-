import './Stats.css';
import { useEffect, useState, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const statsData = [
  { icon: '👥', label: 'Users', value: 12000 },
  { icon: '📦', label: 'Projects', value: 340 },
  { icon: '🏆', label: 'Awards', value: 15 },
];

function useCountUp(end, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [end, duration]);
  return count;
}

export default function Stats() {
  const count1 = useCountUp(statsData[0].value);
  const count2 = useCountUp(statsData[1].value);
  const count3 = useCountUp(statsData[2].value);
  const countersRef = useRef();
  useEffect(() => {
    if (countersRef.current) {
      VanillaTilt.init(countersRef.current.querySelectorAll('.stat'), {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.12,
        scale: 1.03,
      });
    }
  }, []);
  return (
    <div className="stats-container">
      <div className="stats-imgs">
        <div className="stats-gradient" />
        <img src="/stats.png" alt="Stats" className="stats-img" />
        <img src="/graph.png" alt="Graph" className="stats-img" />
      </div>
      <div className="stats-counters" ref={countersRef}>
        <div className="stat" tabIndex={0} aria-label="Users">
          <span className="stat-icon" aria-label="Users">{statsData[0].icon}</span>
          <span className="stat-value">{count1}</span>
          <span className="stat-label">{statsData[0].label}</span>
        </div>
        <div className="stat" tabIndex={0} aria-label="Projects">
          <span className="stat-icon" aria-label="Projects">{statsData[1].icon}</span>
          <span className="stat-value">{count2}</span>
          <span className="stat-label">{statsData[1].label}</span>
        </div>
        <div className="stat" tabIndex={0} aria-label="Awards">
          <span className="stat-icon" aria-label="Awards">{statsData[2].icon}</span>
          <span className="stat-value">{count3}</span>
          <span className="stat-label">{statsData[2].label}</span>
        </div>
      </div>
    </div>
  );
} 