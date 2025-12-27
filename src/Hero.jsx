import './hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        {/* Left Side */}
        <div className="hero-left">
          <h1 className="hero-title">hi, i'm roshni</h1>

          <p className="hero-subtitle">
            UW Madison | Software Developer | Quant Researcher
          </p>

          <div className="status-banner">
            <span className="status-dot-hero"></span>
            <span className="status-text">SEEKING SUMMER 2026: SWE | QUANT DEV | ML/AI ROLES</span>
          </div>

          <p className="hero-bio">
            CS + Math double major passionate about building high-performance systems at the intersection
            of quantitative finance, machine learning, and software engineering. Experience managing $1M+
            portfolios and developing production ML systems.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a
              href="/Guha_Roshni_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="cta-secondary"
            >
              View Projects
            </a>
          </div>

          {/* Bottom Metrics */}
          <div className="hero-metrics">
            <div className="metric-card">
              <div className="metric-icon">💰</div>
              <div className="metric-value">$1M+</div>
              <div className="metric-label">Portfolio Managed</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">👥</div>
              <div className="metric-value">350+</div>
              <div className="metric-label">Active Users</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">⚡</div>
              <div className="metric-value">50%+</div>
              <div className="metric-label">Time Saved</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">🚀</div>
              <div className="metric-value">6+</div>
              <div className="metric-label">Live Projects</div>
            </div>
          </div>
        </div>

        {/* Right Side - Terminal Panel */}
        <div className="hero-right">
          <div className="terminal-panel">
            <div className="terminal-header">┌─ SYSTEM STATUS ────────┐</div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-key">Education:</span>
                <span className="terminal-value">CS + Math</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-key">Class Year:</span>
                <span className="terminal-value">2027</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-key">Portfolio:</span>
                <span className="terminal-value">$1M+</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-key">Projects Live:</span>
                <span className="terminal-value">6+</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-key">Status:</span>
                <span className="terminal-value terminal-recruiting">RECRUITING</span>
              </div>
            </div>
            <div className="terminal-footer">└────────────────────────┘</div>
          </div>
        </div>
      </div>

      {/* Social Links Below */}
      <div className="hero-social">
        <div className="social-links">
          <a
            href="https://github.com/roshni-guha"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/roshni-guha"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:rguha9@wisc.edu"
            className="social-link"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
