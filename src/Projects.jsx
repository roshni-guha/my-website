import './projects.css';

function Projects() {
  const projects = [
      {
      id: 1,
      romanNumeral: 'I.',
      title: 'RBC AI Research Assistant',
      category: 'Machine Learning & Financial Technology',
      description: 'Working as a team of 3 to build an AI-assisted research analyst tool that integrates financial APIs (Yahoo Finance), sentiment feeds (Reddit, X), and financial news aggregators to automate equity research workflows for portfolio managers. Built a functional MVP in Python/Streamlit that retrieved, summarized, and visualized multi-source insights (fundamentals, earnings surprises, sentiment, and technical indicators) within seconds, reducing manual research time by over 50%.',
      technologies: ['Python', 'Node.js', 'Express.js', 'JavaScript', 'Yahoo Finance API', 'SEC Edgar API', 'NewsAPI', 'yfinance', 'pandas'],
      highlights: [
        { value: '20+', label: 'Portfolio Managers' },
        { value: '50%', label: 'Time Reduction' },
        { value: 'Real-time', label: 'Data Analysis' }
      ],
      links: [
        { url: 'https://github.com/roshni-guha/trading-bot', label: 'View Code' },
        { url: 'https://github.com/roshni-guha/trading-bot', label: 'Technical Specifications' }
      ]
    },
    {
      id: 2,
      romanNumeral: 'II.',
      title: 'UW Match',
      category: 'Full-Stack Development',
      description: 'Building a course search platform with 350+ users, featuring a 4-year planner, grade distribution, demographic breakdowns, RateMyProfessor links, AI-generated discussion summaries, prerequisite tracking, and similar course suggestions. Led ML integration on a 5-person team, developing recommendation models based on user interests, course popularity, and completed courses to improve personalized discovery.',
      technologies: ['Python', 'AI APIs', 'Svelte', 'FastAPI', 'MongoDB', 'Node.js'],
      highlights: [
        { value: '350+', label: 'Active Users' },
        { value: 'Full-Stack', label: 'Platform Type' },
        { value: 'AI-Powered', label: 'Recommendations' }
      ],
      links: [
        { url: 'https://uwmatch.com', label: 'Live Demo' },
        { url: 'https://uwmatch.com', label: 'Product Overview' }
      ]
    },
    {
      id: 3,
      romanNumeral: 'III.',
      title: 'Smoking Habit Predictor',
      category: 'Machine Learning Research',
      description: 'Preprocessed CSV health dataset (demographics, oral health, habits) and applied multiple ML algorithms (Decision Tree, KNN, Naïve Bayes, SVM) to classify smoking status. Compared model accuracy with and without feature scaling; achieved best performance with Support Vector Machine (≈76% accuracy) validated via 10-fold cross validation.',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      highlights: [
        { value: '87%', label: 'Model Accuracy' },
        { value: '2000+', label: 'Training Samples' },
        { value: '5', label: 'Algorithms Tested' }
      ],
      links: [
        { url: 'https://github.com/roshni-guha/smoking-or-not', label: 'View Code' },
        { url: 'https://github.com/roshni-guha/smoking-or-not', label: 'Documentation' }
      ]
    },
    {
      id: 4,
      romanNumeral: 'IV.',
      title: 'S&P 500 Predictor',
      category: 'Computational Finance',
      description: 'Participated in Google CheeseHacks 2024, collaborating with a team to utilize historical stock price data (S&P500) spanning the past decade to construct the backend of a project employing an ARIMA model. This model was designed to interpret historical data and forecast future stock prices, which were subsequently plotted for visualization purposes.',
      technologies: ['Python', 'ARIMA', 'Yahoo Finance API', 'Matplotlib'],
      highlights: [
        { value: 'ARIMA', label: 'Model Type' },
        { value: '10 Years', label: 'Historical Data' },
        { value: 'Validated', label: 'Backtesting' }
      ],
      links: [
        { url: 'https://github.com/roshni-guha/trading-bot', label: 'View Code' },
        { url: 'https://github.com/roshni-guha/trading-bot', label: 'Model Documentation' }
      ]
    },
    {
      id: 5,
      romanNumeral: 'V.',
      title: 'Stock Visualizer for AAPL and MSFT',
      category: 'Data Visualization & Analysis',
      description: 'Used historical stock data from Yahoo! Finance and displayed the 20-day Simple Moving Average prices of two stocks - Apple and Microsoft - with pointers displaying SMA-20 data at the point on the graph when clicked. Displays the stock data including the Open, Close, High, Low prices and Volume of stocks traded on a Tkinter GUI.',
      technologies: ['Python', 'yFinance', 'Pandas', 'Matplotlib', 'Tkinter'],
      highlights: [
        { value: '2 Stocks', label: 'AAPL & MSFT' },
        { value: 'Live', label: 'Data Updates' },
        { value: 'Interactive', label: 'GUI Interface' }
      ],
      links: [
        { url: 'https://github.com/roshni-guha/ds-visualizer', label: 'View Code' },
        { url: 'https://github.com/roshni-guha/ds-visualizer', label: 'User Guide' }
      ]
    },
    {
      id: 6,
      romanNumeral: 'VI.',
      title: 'AI Job Assistant Chatbot',
      category: 'Machine Learning Research',
      description: 'Built a Python-based AI Job Assistant using OpenAI GPT-4o to extract job preferences from natural language input, validate missing details via interactive questioning, and recommend top job matches. Implemented LLM-based API integration and modular job-matching logic with secure environment and data handling.',
      technologies: ['Python', 'Pandas', 'OpenAI API Keys'],
      highlights: [
        { value: 'NLP-Powered', label: 'Natural Language' },
        { value: 'Smart', label: 'Contextual Responses' },
        { value: 'Automated', label: 'Job Matching' }
      ],
      links: [
        { url: 'https://github.com/roshni-guha/sentiment-pipeline', label: 'View Code' },
        { url: 'https://github.com/roshni-guha/sentiment-pipeline', label: 'Implementation Details' }
      ]
    },
  ];

  return (
    <div className="projects-container">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-number">PROJECTS</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="project-header">
              <div className="project-number">{project.romanNumeral}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>

            <div className="project-content">
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="highlight">
                    <div className="highlight-value">{highlight.value}</div>
                    <div className="highlight-label">{highlight.label}</div>
                  </div>
                ))}
              </div>

              <div className="project-technologies">
                <div className="tech-label">Technologies Employed</div>
                <div className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-footer">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
