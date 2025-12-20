import './projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Research Assistant',
      description: 'AI-powered tool integrating financial APIs and sentiment analysis to automate equity research workflows.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/roshni-guha/ai-research-assistant'
    },
    {
      id: 2,
      title: 'Portfolio Optimization Framework',
      description: 'Momentum-based trading model for SPY with Mean-Variance Optimization framework using Python and PyTorch.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/roshni-guha/portfolio-optimization'
    },
    {
      id: 3,
      title: 'Data Structures Visualizer',
      description: 'Interactive web application for visualizing common data structures and algorithms for students.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/roshni-guha/ds-visualizer'
    },
    {
      id: 4,
      title: 'Sentiment Analysis Pipeline',
      description: 'Real-time sentiment analysis for financial news from Reddit, X, and major news sources using NLP.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/roshni-guha/sentiment-pipeline'
    },
    {
      id: 5,
      title: 'Trading Bot',
      description: 'Automated trading system using Interactive Brokers API with Docker containerization and cloud deployment.',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/roshni-guha/trading-bot'
    },
    {
      id: 6,
      title: 'ML Stock Predictor',
      description: 'Reinforcement learning model for global equity prediction with feature engineering and backtesting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/roshni-guha/ml-stock-predictor'
    },
    {
      id: 7,
      title: 'Financial Dashboard',
      description: 'Real-time financial dashboard with interactive charts, market data, and portfolio tracking.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/roshni-guha/financial-dashboard'
    },
    {
      id: 8,
      title: 'Algorithmic Trading Simulator',
      description: 'Backtesting platform for algorithmic trading strategies with historical market data.',
      image: 'https://images.unsplash.com/photo-1642790595397-7047dc98fa72?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/roshni-guha/algo-trading-sim'
    },
    {
      id: 9,
      title: 'Code Review Assistant',
      description: 'AI-powered code review tool that analyzes pull requests and suggests improvements.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/roshni-guha/code-review-assistant'
    }
  ];

  return (
    <div className="projects-container">

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-footer">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
