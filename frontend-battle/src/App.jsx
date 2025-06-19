import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import Parallax from './components/Parallax'
import RippleEffect from './components/RippleEffect'
import CustomerSection from './components/CustomerSection'
import FeaturesServices from './components/FeaturesServices'
import ShowcaseWork from './components/ShowcaseWork'
import Lottie from 'lottie-react'
import confettiData from './lottie/confetti.json'

const sectionIds = [
  'carousel',
  'testimonials',
  'stats',
  'parallax',
  'ripple',
  'customer',
  'features',
  'showcase',
]

function App() {
  const [theme, setTheme] = useState('light')
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('carousel')
  const [navOpen, setNavOpen] = useState(false)
  const sectionRefs = useRef(sectionIds.map(() => React.createRef()))

  useEffect(() => {
    // Simulate loader duration
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  // Section fade-in and active nav logic
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, idx) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.6 && rect.bottom > 0) {
          ref.current.classList.add('visible')
          setActiveSection(sectionIds[idx])
        } else {
          ref.current.classList.remove('visible')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Back to top button
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id, idx) => {
    setNavOpen(false)
    sectionRefs.current[idx].current.scrollIntoView({ behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="loader-container">
        <video src="/loader.mp4" autoPlay loop muted className="loader-video" />
        <div className="lottie-confetti">
          <Lottie animationData={confettiData} loop autoplay style={{ height: 120, width: 120 }} />
        </div>
      </div>
    )
  }

  return (
    <div className={`app ${theme}`}>
      {/* Navbar */}
      <header>
        <nav className="navbar" role="navigation" aria-label="Main Navigation">
          <div className="logo">FRONT-END BATTLE 2.0</div>
          <div className="hamburger" onClick={() => setNavOpen((v) => !v)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links${navOpen ? ' open' : ''}`}>
            {sectionIds.map((id, idx) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  aria-current={activeSection === id ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(id, idx)
                  }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>
      {/* Main Sections */}
      <main id="main-content" role="main" aria-label="Main Content">
        {sectionIds.map((id, idx) => (
          <>
            <section
              id={id}
              className="section glass"
              key={id}
              ref={sectionRefs.current[idx]}
            >
              {id === 'carousel' && <Carousel />}
              {id === 'testimonials' && <Testimonials />}
              {id === 'stats' && <Stats />}
              {id === 'parallax' && <Parallax />}
              {id === 'ripple' && <RippleEffect />}
              {id === 'customer' && <CustomerSection />}
              {id === 'features' && <FeaturesServices />}
              {id === 'showcase' && <ShowcaseWork />}
            </section>
            {idx < sectionIds.length - 1 && (
              <svg className="section-divider" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#646cff22" />
              </svg>
            )}
          </>
        ))}
      </main>
      {showTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          ↑
        </button>
      )}
      <footer className="footer" role="contentinfo" aria-label="Footer">
        <div className="footer-content">
          <span>© {new Date().getFullYear()} Front-End Battle 2.0</span>
          <span className="footer-socials">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56c-.89.39-1.85.65-2.86.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19A4.92 4.92 0 0 0 16.62 3c-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.12 1.13C7.69 8.86 4.07 6.94 1.64 4.15c-.43.74-.67 1.6-.67 2.52 0 1.74.89 3.28 2.25 4.18-.83-.03-1.61-.25-2.29-.63v.06c0 2.43 1.73 4.46 4.03 4.92-.42.12-.87.18-1.33.18-.32 0-.63-.03-.93-.09.63 1.97 2.45 3.4 4.6 3.44A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.93 9.93 0 0 0 24 4.56z"/></svg></a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
