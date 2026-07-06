import Portfolio from './portfolio.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import { useState, useEffect } from 'react';
import './home.css';

function Home() {
  const [activePage,     setActivePage]     = useState('home');
  const [displayPage,    setDisplayPage]    = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navItems = [
    { key: 'home',      label: 'Home' },
    { key: 'portfolio', label: 'Experience' },
    { key: 'projects',  label: 'Projects' },
    { key: 'skills',    label: 'Skills' },
  ];

  const marqueeItems = [
    'AI Engineering', 'Quantitative Finance', 'Machine Learning',
    'UW–Madison', 'CS & Mathematics', 'Voyager AI',
    'ML Research', 'CapitalFund', 'Summer 2026', 'Systems Analysis',
  ];

  const navigate = (page) => {
    if (page === activePage || isTransitioning) return;
    setActivePage(page);
    setIsTransitioning(true);
    setTimeout(() => {
      setDisplayPage(page);
      setIsTransitioning(false);
    }, 210);
  };

  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    if (!dot) return;
    const move = (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    };
    const over = (e) => {
      const interactive = e.target.closest('a, button, .gallery-img, .timeline-entry, .skill-category, .project');
      dot.classList.toggle('cursor-hover', !!interactive);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <div id="cursor-dot"></div>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        backgroundColor: 'rgba(247, 243, 236, 0.97)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #DDD7CC',
        zIndex: 1000, padding: '0 60px', height: '58px',
        display: 'flex', alignItems: 'center',
      }}>
        <nav style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={() => navigate('home')}
            style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '0.72rem', fontWeight: '500',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: activePage === 'home' ? '#B5913C' : '#130F0A',
              background: 'transparent', border: 'none',
            }}
          >
            Roshni Guha
          </button>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => navigate(key)}
                style={{
                  background: 'transparent', border: 'none',
                  borderBottom: activePage === key ? '1px solid #B5913C' : '1px solid transparent',
                  color: activePage === key ? '#B5913C' : '#9A9182',
                  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: '0.68rem', fontWeight: '500',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  padding: '8px 20px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => { if (activePage !== key) e.currentTarget.style.color = '#B5913C'; }}
                onMouseLeave={(e) => { if (activePage !== key) e.currentTarget.style.color = '#9A9182'; }}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <div className="marquee-strip">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}<span className="marquee-sep">·</span>
            </span>
          ))}
        </div>
      </div>

      <main
        className={`page-wrap ${isTransitioning ? 'page-exit' : 'page-enter'}`}
        style={{ marginTop: '86px', flex: 1 }}
      >
        {displayPage === 'home'      && <Hero />}
        {displayPage === 'portfolio' && <Portfolio />}
        {displayPage === 'projects'  && <Projects />}
        {displayPage === 'skills'    && <Skills />}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-name">Roshni Guha</span>
          <div className="footer-links">
            <a href="https://github.com/roshni-guha" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/roshni-guha" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:rguha@wisc.edu">Email</a>
          </div>
          <span className="footer-year">© 2026</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
