import Portfolio from './portfolio.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Terminal from './Terminal.jsx';
import { useState } from 'react';

const monoFont = "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'SF Mono', 'Monaco', 'Consolas', monospace";

const navBg = 'rgba(13, 17, 23, 0.97)';
const navBorder = '#30363d';
const activeColor = '#3fb950';
const inactiveColor = '#484f58';
const hoverColor = '#8b949e';

function Home() {
  const [currentPage, setCurrentPage] = useState('home');

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
              { key: 'terminal', label: 'terminal' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                style={{
                  background: currentPage === key ? 'rgba(63, 185, 80, 0.08)' : 'transparent',
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
          </div>
        </nav>
      </header>

      <main style={{ marginTop: '65px' }}>
        {currentPage === 'home' && <Hero onOpenTerminal={() => setCurrentPage('terminal')} />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'skills' && <Skills />}
        {currentPage === 'terminal' && <Terminal />}
      </main>
    </div>
  );
}

export default Home;
