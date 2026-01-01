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
          <a href="#portfolio" className="btn btn-primary">View Experience</a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
          <a href="dist/Guha_Roshni_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Download CV</a>
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
