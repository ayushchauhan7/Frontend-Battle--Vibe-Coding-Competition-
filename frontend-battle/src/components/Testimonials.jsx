import './Testimonials.css';

export default function Testimonials() {
  return (
    <div className="testimonials">
      <video src="/testimonials.mp4" autoPlay loop muted playsInline className="testimonials-video" />
      <div className="testimonial-text">
        <h3>What Our Users Say</h3>
        <blockquote>
          "This platform transformed our workflow! The UI is stunning and the experience is seamless."
        </blockquote>
        <span>- Happy Customer</span>
      </div>
    </div>
  );
} 