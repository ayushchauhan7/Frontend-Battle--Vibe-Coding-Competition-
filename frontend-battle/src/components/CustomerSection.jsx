import './CustomerSection.css';

export default function CustomerSection() {
  return (
    <div className="customer-section">
      <video className="customer-bg" src="/customer-section.mp4" autoPlay loop muted playsInline />
      <div className="customer-overlay">
        <h3>Our Happy Customers</h3>
        <div className="customer-logos">
          <span className="customer-logo">A</span>
          <span className="customer-logo">B</span>
          <span className="customer-logo">C</span>
          <span className="customer-logo">D</span>
        </div>
      </div>
    </div>
  );
} 