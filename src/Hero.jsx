import './hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        {/* Name */}
        <h1 className="hero-name">Roshni Guha</h1>

        {/* Credentials Grid */}
        <div className="credentials-grid">
          <div className="credential-item">
            <h3 className="credential-title">Bachelor of Science</h3>
            <p className="credential-institution">Computer Science (Honors), Mathematics</p>
          </div>

          <div className="credential-item">
            <h3 className="credential-title">GPA</h3>
            <p className="credential-institution">3.878 / 4.0</p>
          </div>

          <div className="credential-item">
            <h3 className="credential-title">Coursework</h3>
            <p className="credential-institution">Mathematical Machine Learning, Artificial Intelligence, Linear Algebra, Programming</p>
          </div>

          <div className="credential-item">
            <h3 className="credential-title">Current Status</h3>
            <p className="credential-institution">Winter Break! Happy new year, and have a great year!</p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="about-section">
          <div className="section-divider"></div>
          <p className="about-text">
            I'm a sophomore at UW-Madison pursuing dual degrees in Computer Science and Mathematics.
            My passion lies at the intersection of software engineering, quantitative finance, and machine learning.
            I love building scalable systems, developing algorithmic trading strategies, and applying ML to solve real-world problems.
            Currently seeking Summer 2026 opportunities in Software Engineering, Quantitative Development, or Machine Learning roles.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <a href="dist/Guha_Roshni_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download CV</a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/roshniguha" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/roshni-guha" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:rguha@wisc.edu" className="social-link" aria-label="Email">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-right">
        {/* Stats Panel */}
        <div className="stats-panel">
          <div className="panel-header">Professional Status</div>

          <div className="stat-item">
            <div className="stat-label">Class Year</div>
            <div className="stat-value">2028</div>
          </div>

          <div className="stat-item">
            <div className="stat-label">Current Role</div>
            <div className="stat-value">Sophomore</div>
          </div>

          <div className="stat-item">
            <div className="stat-label">Seeking</div>
            <div className="stat-value">Summer 2026</div>
          </div>

          <div className="stat-item">
            <div className="stat-label">Targets</div>
            <div className="stat-value">SWE · Quant · ML</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
