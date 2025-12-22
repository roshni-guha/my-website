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
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--nav-border)',
        zIndex: 1000,
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}>
        <nav style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <button onClick={() => setCurrentPage('home')} style={{ marginRight: '20px' }}>
              HOME
            </button>
            <button onClick={() => setCurrentPage('portfolio')} style={{ marginRight: '20px' }}>
              PORTFOLIO
            </button>
            <button onClick={() => setCurrentPage('projects')} style={{ marginRight: '20px' }}>
              PROJECTS
            </button>
          </div>
          <button
            onClick={toggleTheme}
            style={{
              padding: '8px 16px',
              fontSize: '0.9em',
              borderRadius: '6px'
            }}
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
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
