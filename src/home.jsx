import { useState } from 'react';
import Resume from './resume.jsx';
import Portfolio from './portfolio.jsx';

function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1e1e1e',
        zIndex: 1000
      }}>
        <nav style={{ padding: '20px', borderBottom: '1px solid #444' }}>
          <button onClick={() => setCurrentPage('home')} style={{ marginRight: '20px' }}>
            HOME
          </button>
          <button onClick={() => setCurrentPage('resume')} style={{ marginRight: '20px' }}>
            RESUME
          </button>
          <button onClick={() => setCurrentPage('portfolio')}>
            PORTFOLIO
          </button>
        </nav>
      </header>

      <main style={{ marginTop: '80px' }}>
        {currentPage === 'home' && <h1>Welcome to My Website</h1>}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'portfolio' && <Portfolio />}
      </main>
    </div>
  );
}

export default Home;
