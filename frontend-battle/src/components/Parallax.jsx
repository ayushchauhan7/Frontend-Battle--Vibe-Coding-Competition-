import './Parallax.css';
import { useRef, useEffect, useState } from 'react';

export default function Parallax() {
  const videoRef = useRef();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const rect = videoRef.current.parentElement.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setOffset(((rect.top + scrollY) * 0.1) % 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <video
        ref={videoRef}
        className="parallax-bg"
        src="/parallax animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ transform: `translateY(${offset}px)` }}
        aria-hidden="true"
      />
      <div className="parallax-content">
        <h2>Immersive Parallax Experience</h2>
        <p>Scroll to see the magic of parallax in action!</p>
      </div>
    </div>
  );
} 