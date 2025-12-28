import { useState, useEffect } from 'react';
import Portfolio from './portfolio.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';

function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--nav-border)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: '20px 60px'
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
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.2em',
              fontWeight: '700',
              color: '#00ff41',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            &lt;RG /&gt;
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div style={{
              display: 'flex',
              gap: '40px',
              listStyle: 'none'
            }}>
              <button
                onClick={() => setCurrentPage('home')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: currentPage === 'home' ? '#00ff41' : 'var(--text-secondary)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9em',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  padding: '5px 0'
                }}
              >
                HOME
              </button>
              <button
                onClick={() => setCurrentPage('portfolio')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: currentPage === 'portfolio' ? '#00ff41' : 'var(--text-secondary)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9em',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  padding: '5px 0'
                }}
              >
                PORTFOLIO
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: currentPage === 'projects' ? '#00ff41' : 'var(--text-secondary)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9em',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  padding: '5px 0'
                }}
              >
                PROJECTS
              </button>
            </div>
            <button
              onClick={toggleTheme}
              style={{
                padding: '8px 16px',
                fontSize: '0.85em',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: '500',
                borderRadius: '6px',
                background: 'transparent',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </nav>
      </header>

      <main style={{ marginTop: '80px' }}>
        {currentPage === 'home' && <Hero />}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'projects' && <Projects />}
      </main>
    </div>
  );
}

export default Home;
