import { useState, useEffect } from 'react';
import Portfolio from './portfolio.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';

const monoFont = "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'SF Mono', 'Monaco', 'Consolas', monospace";

function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

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

  const navBg = isDarkMode ? 'rgba(0, 17, 0, 0.97)' : 'rgba(13, 17, 23, 0.97)';
  const navBorder = isDarkMode ? '#003d1a' : '#30363d';
  const activeColor = isDarkMode ? '#00ff88' : '#3fb950';
  const inactiveColor = isDarkMode ? '#006633' : '#484f58';
  const hoverColor = isDarkMode ? '#00cc66' : '#8b949e';

  return (
    <div>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: navBg,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${navBorder}`,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: '16px 60px',
        boxShadow: '0 1px 8px rgba(0, 0, 0, 0.5)'
      }}>
        <nav style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo - terminal prompt style */}
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              fontFamily: monoFont,
              fontSize: '0.95em',
              fontWeight: '600',
              color: activeColor,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => e.target.style.color = hoverColor}
            onMouseLeave={(e) => e.target.style.color = activeColor}
          >
            rg@uw-madison:~$
          </button>

          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            {[
              { key: 'home', label: 'home' },
              { key: 'portfolio', label: 'experience' },
              { key: 'projects', label: 'projects' },
              { key: 'skills', label: 'skills' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                style={{
                  background: currentPage === key ? (isDarkMode ? 'rgba(0, 255, 136, 0.06)' : 'rgba(63, 185, 80, 0.08)') : 'transparent',
                  border: currentPage === key ? `1px solid ${activeColor}` : '1px solid transparent',
                  color: currentPage === key ? activeColor : inactiveColor,
                  fontFamily: monoFont,
                  fontSize: '0.82em',
                  fontWeight: currentPage === key ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== key) {
                    e.currentTarget.style.color = hoverColor;
                    e.currentTarget.style.borderColor = navBorder;
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== key) {
                    e.currentTarget.style.color = inactiveColor;
                    e.currentTarget.style.borderColor = 'transparent';
                  }
                }}
              >
                ./{label}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'transparent',
                border: `1px solid ${navBorder}`,
                color: inactiveColor,
                fontFamily: monoFont,
                fontSize: '0.78em',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                padding: '6px 14px',
                borderRadius: '4px',
                letterSpacing: '0.04em',
                marginLeft: '12px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = activeColor;
                e.currentTarget.style.color = activeColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = navBorder;
                e.currentTarget.style.color = inactiveColor;
              }}
            >
              {isDarkMode ? '[modern]' : '[matrix]'}
            </button>
          </div>
        </nav>
      </header>

      <main style={{ marginTop: '65px' }}>
        {currentPage === 'home' && <Hero />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'skills' && <Skills />}
      </main>
    </div>
  );
}

export default Home;
