import './RippleEffect.css';
import { useRef } from 'react';

export default function RippleEffect() {
  const btnRef = useRef();

  const handleRipple = (e) => {
    const button = btnRef.current;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.classList.add('ripple');
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <div className="ripple-container">
      <video className="ripple-bg" src="/ripple effect.mp4" autoPlay loop muted playsInline />
      <button ref={btnRef} className="ripple-cta" onClick={handleRipple} aria-label="Try the Ripple Effect!">
        Try the Ripple Effect!
      </button>
    </div>
  );
} 