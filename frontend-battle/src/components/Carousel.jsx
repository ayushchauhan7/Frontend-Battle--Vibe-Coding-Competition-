import { useRef, useEffect, useState } from 'react';
import './Carousel.css';

const slides = [
  { type: 'video', src: '/caraousel switch.mp4', alt: 'Carousel Switch Video' },
  { type: 'image', src: '/cards.png', alt: 'Cards' },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  const goTo = (idx) => {
    setFade(true);
    setTimeout(() => {
      setCurrent(idx);
      setFade(false);
    }, 300);
  };
  const handlePrev = () => goTo((current - 1 + slides.length) % slides.length);
  const handleNext = () => goTo((current + 1) % slides.length);

  return (
    <div className="carousel" aria-label="Carousel">
      <button className="carousel-btn left" onClick={handlePrev} aria-label="Previous Slide">&lt;</button>
      <div className={`carousel-slide${fade ? ' fade' : ''}`} aria-live="polite">
        {slides[current].type === 'video' ? (
          <video src={slides[current].src} autoPlay loop muted playsInline className="carousel-media" aria-label={slides[current].alt} />
        ) : (
          <img src={slides[current].src} alt={slides[current].alt} className="carousel-media" />
        )}
      </div>
      <button className="carousel-btn right" onClick={handleNext} aria-label="Next Slide">&gt;</button>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span key={i} className={i === current ? 'active' : ''} onClick={() => goTo(i)} aria-label={`Go to slide ${i+1}`}></span>
        ))}
      </div>
    </div>
  );
} 