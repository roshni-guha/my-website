import { useState } from 'react';
import Resume from './resume.jsx';

function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <header>
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

      {currentPage === 'home' && <h1>Welcome to My Website</h1>}
      {currentPage === 'resume' && <Resume />}
      {currentPage === 'portfolio' && <h1>Portfolio (Coming Soon)</h1>}
    </div>
  );
}

export default Home;
