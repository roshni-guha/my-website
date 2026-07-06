import { useState, useEffect } from 'react';
import './hero.css';

const galleryImages = [
  { src: '/gallery/NYC_church.jpg',      alt: 'NYC church' },
  { src: '/gallery/NYC_fifth.jpg',       alt: 'Fifth Avenue, NYC' },
  { src: '/gallery/NYC_office_view.jpg', alt: 'NYC office view' },
  { src: '/gallery/dallas_office.jpg',   alt: 'Dallas office' },
  { src: '/gallery/lake_mendota.jpg',    alt: 'Lake Mendota' },
  { src: '/gallery/madison.jpg',         alt: 'Madison' },
];

function Hero() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft')  setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  return (
    <div className="hero-wrapper">
      <span className="ghost-title">Roshni</span>
      <div className="hero-container">
        <div className="hero-left">

          <div className="hero-intro">
            <p className="hero-eyebrow">UW–Madison &nbsp;·&nbsp; Computer Science &amp; Mathematics</p>
            <h1 className="hero-name">Roshni Guha</h1>
            <hr className="hero-rule" />
          </div>

          <div className="credentials-grid">
            <div className="credential-item">
              <h3 className="credential-title">Degree</h3>
              <p className="credential-institution">B.S. Computer Science (Honors), Mathematics</p>
            </div>
            <div className="credential-item">
              <h3 className="credential-title">GPA</h3>
              <p className="credential-institution">3.84 / 4.0</p>
            </div>
            <div className="credential-item">
              <h3 className="credential-title">Coursework</h3>
              <p className="credential-institution">Mathematical Machine Learning, Artificial Intelligence, Linear Algebra, Programming</p>
            </div>
            <div className="credential-item">
              <h3 className="credential-title">Current Status</h3>
              <p className="credential-institution">Biking in Summer is the most fun!</p>
            </div>
          </div>

          <div className="about-section">
            <p className="about-text">
              I'm a sophomore at UW-Madison pursuing dual degrees in Computer Science and Mathematics.
              My passion lies at the intersection of software engineering, quantitative finance, and machine learning.
              I love building scalable systems, developing algorithmic trading strategies, and applying ML to solve real-world problems.
            </p>
          </div>

          <div className="social-links">
            <a href="https://github.com/roshniguha" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="social-label">roshni-guha</span>
            </a>
            <a href="https://linkedin.com/in/roshni-guha" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="social-label">roshni-guha</span>
            </a>
            <a href="mailto:rguha@wisc.edu" className="social-link" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="social-label">rguha@wisc.edu</span>
            </a>
          </div>

        </div>

        <div className="hero-right">
          <div className="stats-panel">
            <div className="panel-header">Professional Status</div>
            <div className="stat-item">
              <div className="stat-label">Current Role</div>
              <div className="stat-value">
                AI Engineering Intern @ Voyager AI<br />
                Systems Analyst Intern @ DOR<br />
                ML Researcher @ HFML
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Areas</div>
              <div className="stat-value">SWE · Quant · ML</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width gallery below both columns */}
      <div className="gallery-section">
        <p className="gallery-eyebrow">From the gallery</p>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="gallery-img"
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >✕</button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length); }}
            aria-label="Previous"
          >&#8592;</button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % galleryImages.length); }}
            aria-label="Next"
          >&#8594;</button>
          <div className="lightbox-counter">
            {lightboxIndex + 1} &nbsp;/&nbsp; {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
