import { useState } from 'react';
import './projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Smoking Habit Predictor',
      category: 'MACHINE LEARNING',
      status: 'COMPLETE',
      description: 'ML classification model predicting smoking habits from health indicators',
      fullDescription: 'Preprocessed CSV health dataset (demographics, oral health, habits) and applied multiple ML algorithms (Decision Tree, KNN, Naïve Bayes, SVM) to classify smoking status. Compared model accuracy with and without feature scaling; achieved best performance with Support Vector Machine (≈76% accuracy) validated via 10-fold cross validation.',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      metrics: [
        { icon: '▸', value: '87%', label: 'Accuracy' },
        { icon: '#', value: '2000+', label: 'Samples' },
        { icon: '*', value: '5', label: 'Algorithms' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      link: {
        url: 'https://github.com/roshni-guha/smoking-or-not',
        label: 'View Code',
        isGithub: true
      },
      demoLink: null
    },
    {
      id: 2,
      title: 'UW Match',
      category: 'FULL-STACK',
      status: 'LIVE',
      description: 'Course scheduling platform with AI-powered recommendations',
      fullDescription: 'Building a course search platform with 350+ users, featuring a 4-year planner, grade distribution, demographic breakdowns, RateMyProfessor links, AI-generated discussion summaries, prerequisite tracking, and similar course suggestions. \nLed ML integration on a 5-person team, developing recommendation models based on user interests, course popularity, and completed courses to improve personalized discovery.',
      technologies: ['Python', 'AI APIs', 'Svelte', 'FastAPI', 'MongoDB', 'Node.js'],
      metrics: [
        { icon: '#', value: '350+', label: 'Users' },
        { icon: '▸', value: 'Full', label: 'Responsive' },
        { icon: '⚡', value: 'Fast', label: 'Search' }
      ],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      link: {
        url: 'https://uwmatch.com',
        label: 'Live Demo',
        isGithub: false
      },
      demoLink: null
    },
    {
      id: 3,
      title: 'RBC AI Research Assistant',
      category: 'ML/AI',
      status: 'PRODUCTION',
      description: 'AI-powered equity research automation for portfolio managers',
      fullDescription: 'Working as a team of 3 to build an AI-assisted research analyst tool that integrates financial APIs (Yahoo Finance), sentiment feeds (Reddit, X), and financial news aggregators to automate equity research workflows for portfolio managers. Built a functional MVP in Python/Streamlit that retrieved, summarized, and visualized multi-source insights (fundamentals, earnings surprises, sentiment, and technical indicators) within seconds, reducing manual research time by over 50%.',
      technologies: ['Python', 'Node.js', 'Express.js', 'JavaScript', 'Yahoo Finance API', 'SEC Edgar API', 'NewsAPI', 'yfinance', 'pandas'],
      metrics: [
        { icon: '#', value: '20+', label: 'Users' },
        { icon: '⚡', value: '50%', label: 'Faster' },
        { icon: '>', value: 'AI', label: 'Powered Analysis' }
      ],
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop',
      link: {
        url: 'https://github.com/roshni-guha/trading-bot',
        label: 'View Code',
        isGithub: true
      },
      demoLink: null
    },
    {
      id: 4,
      title: 'S&P 500 Predictor',
      category: 'QUANT FINANCE',
      status: 'COMPLETE',
      description: 'ARIMA time series model for stock price forecasting',
      fullDescription: 'Participated in Google CheeseHacks 2024, collaborating with a team to utilize historical stock price data (S&P500) spanning the past decade to construct the backend of a project employing an ARIMA model. This model was designed to interpret historical data and forecast future stock prices, which were subsequently plotted for visualization purposes.',
      technologies: ['Python', 'ARIMA', 'Yahoo Finance API', 'Matplotlib'],
      metrics: [
        { icon: '$', value: 'ARIMA', label: 'Model' },
        { icon: '#', value: '10 Yr', label: 'Data' },
        { icon: '✓', value: 'Tested', label: 'Backtest' }
      ],
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop',
      link: {
        url: 'https://github.com/roshni-guha/trading-bot',
        label: 'View Code',
        isGithub: true
      },
      demoLink: null
    },
    {
      id: 5,
      title: 'Stock Visualizer for AAPL and MSFT',
      category: 'DATA VIZ',
      status: 'COMPLETE',
      description: 'Interactive stock analysis with moving averages and technical indicators',
      fullDescription: 'Used historical stock data from Yahoo! Finance and displayed the 20-day Simple Moving Average prices of two stocks - Apple and Microsoft - with pointers displaying SMA-20 data at the point on the graph when clicked. Displays the stock data including the Open, Close, High, Low prices and Volume of stocks traded on a Tkinter GUI.',
      technologies: ['Python', 'yFinance', 'Pandas', 'Matplotlib', 'Tkinter'],
      metrics: [
        { icon: '#', value: '2', label: 'Stocks' },
        { icon: '⚡', value: 'Live', label: 'Updates' },
        { icon: '▸', value: 'GUI', label: 'Interactive' }
      ],
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop',
      link: {
        url: 'https://github.com/roshni-guha/ds-visualizer',
        label: 'View Code',
        isGithub: true
      },
      demoLink: null
    },
    {
      id: 6,
      title: 'AI Job Assistant Chatbot',
      category: 'ML/AI',
      status: 'COMPLETE',
      description: 'NLP-powered job matching with conversational interface',
      fullDescription: 'Built a Python-based AI Job Assistant using OpenAI GPT-4o to extract job preferences from natural language input, validate missing details via interactive questioning, and recommend top job matches. Implemented LLM-based API integration and modular job-matching logic with secure environment and data handling.',
      technologies: ['Python', 'Pandas', 'OpenAI API Keys'],
      metrics: [
        { icon: '>', value: 'NLP', label: 'Powered' },
        { icon: '*', value: 'Smart', label: 'Responses' },
        { icon: '▸', value: 'Match', label: 'Jobs' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      link: {
        url: 'https://github.com/roshni-guha/sentiment-pipeline',
        label: 'View Code',
        isGithub: true
      },
      demoLink: null
    },
  ];

  return (
    <div className="projects-container">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-number">PROJECTS</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            {/* Badges below image */}
            <div className="project-badges">
              <span className={`category-badge category-${project.category.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-')}`}>
                {project.category}
              </span>
              <span className={`status-badge-proj status-proj-${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Metrics Bar */}
              <div className="project-metrics-bar">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="project-metric">
                    <span className="proj-metric-icon">{metric.icon}</span>
                    <span className="proj-metric-value">{metric.value}</span>
                    <span className="proj-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="project-technologies">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <span key={index} className="proj-tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="proj-tech-tag">+{project.technologies.length - 4}</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.link.label}
                </a>
                <button
                  className="project-btn project-btn-secondary"
                  onClick={() => setSelectedProject(project)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ×
            </button>

            <div className="modal-image-wrapper">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
            </div>

            <div className="modal-body">
              <h2>{selectedProject.title}</h2>

              <div className="modal-section">
                <h3>Overview</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              {/* <div className="modal-section">
                <h3>Key Highlights</h3>
                <ul className="highlights-list">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div> */}

              <div className="modal-section">
                <h3>Technologies</h3>
                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <div className="modal-footer">
                  <a
                    href={selectedProject.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-project-link"
                  >
                    {selectedProject.link.isGithub && (
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    )}
                    {!selectedProject.link.isGithub && (
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"/>
                      </svg>
                    )}
                    {selectedProject.link.label}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
