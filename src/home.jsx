import { useState, useEffect } from 'react';
import Portfolio from './portfolio.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';

function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isDarkMode ? 'rgba(26, 39, 66, 0.95)' : 'rgba(250, 247, 242, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: isDarkMode ? '1px solid #3d5a80' : '1px solid #d4c5b0',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: '24px 60px',
        boxShadow: '0 2px 12px rgba(30, 58, 95, 0.08)'
      }}>
        <nav style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.6em',
              fontWeight: '700',
              color: '#1e3a5f',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '2px',
              textShadow: '0 1px 2px rgba(30, 58, 95, 0.1)'
            }}
            onMouseEnter={(e) => e.target.style.color = '#b8955e'}
            onMouseLeave={(e) => e.target.style.color = '#1e3a5f'}
          >
            RG
          </button>
          <div style={{
            display: 'flex',
            gap: '50px',
            listStyle: 'none'
          }}>
            <button
              onClick={() => setCurrentPage('home')}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentPage === 'home' ? '#1e3a5f' : (isDarkMode ? '#d4d4d4' : '#5a5a5a'),
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.05em',
                fontWeight: currentPage === 'home' ? '600' : '500',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '5px 0',
                letterSpacing: '1.2px',
                borderBottom: currentPage === 'home' ? '2px solid #1e3a5f' : 'none'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'home') e.target.style.color = '#b8955e';
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'home') e.target.style.color = isDarkMode ? '#d4d4d4' : '#5a5a5a';
              }}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('portfolio')}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentPage === 'portfolio' ? '#1e3a5f' : (isDarkMode ? '#d4d4d4' : '#5a5a5a'),
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.05em',
                fontWeight: currentPage === 'portfolio' ? '600' : '500',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '5px 0',
                letterSpacing: '1.2px',
                borderBottom: currentPage === 'portfolio' ? '2px solid #1e3a5f' : 'none'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'portfolio') e.target.style.color = '#b8955e';
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'portfolio') e.target.style.color = isDarkMode ? '#d4d4d4' : '#5a5a5a';
              }}
            >
              Experience
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentPage === 'projects' ? '#1e3a5f' : (isDarkMode ? '#d4d4d4' : '#5a5a5a'),
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.05em',
                fontWeight: currentPage === 'projects' ? '600' : '500',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '5px 0',
                letterSpacing: '1.2px',
                borderBottom: currentPage === 'projects' ? '2px solid #1e3a5f' : 'none'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'projects') e.target.style.color = '#b8955e';
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'projects') e.target.style.color = isDarkMode ? '#d4d4d4' : '#5a5a5a';
              }}
            >
              Projects
            </button>
            <button
              onClick={() => setCurrentPage('skills')}
              style={{
                background: 'transparent',
                border: 'none',
                color: currentPage === 'skills' ? '#1e3a5f' : (isDarkMode ? '#d4d4d4' : '#5a5a5a'),
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.05em',
                fontWeight: currentPage === 'skills' ? '600' : '500',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '5px 0',
                letterSpacing: '1.2px',
                borderBottom: currentPage === 'skills' ? '2px solid #1e3a5f' : 'none'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'skills') e.target.style.color = '#b8955e';
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'skills') e.target.style.color = isDarkMode ? '#d4d4d4' : '#5a5a5a';
              }}
            >
              Skills
            </button>
            <button
              onClick={toggleTheme}
              style={{
                background: 'transparent',
                border: '2px solid #b8955e',
                color: '#b8955e',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '0.95em',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '8px 16px',
                borderRadius: '8px',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginLeft: '20px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(184, 149, 94, 0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '1.2em' }}>{isDarkMode ? '☀️' : '🌙'}</span>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </nav>
      </header>

      <main style={{ marginTop: '80px' }}>
        {currentPage === 'home' && <Hero />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'skills' && <Skills />}
      </main>
    </div>
  );
}

export default Home;
