import Portfolio from './portfolio.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import { useState, useEffect } from 'react';
import './home.css';

function Home() {
  const [activePage,      setActivePage]      = useState('home');
  const [displayPage,     setDisplayPage]     = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [darkMode,        setDarkMode]        = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

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

      <header className="site-header">
        <nav className="site-nav">
          <button
            onClick={() => navigate('home')}
            className={`nav-wordmark ${activePage === 'home' ? 'nav-wordmark-active' : ''}`}
          >
            Roshni Guha
          </button>

          <div className="nav-right">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => navigate(key)}
                className={`nav-link ${activePage === key ? 'nav-link-active' : ''}`}
              >
                {label}
              </button>
            ))}

            <button
              className="theme-toggle"
              onClick={() => setDarkMode(d => !d)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
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
