import './portfolio.css';

function Portfolio() {
  // Sample experiences data - you can replace with your actual experiences
  const experiences = [
    {
      id: 1,
      title: 'Undergraduate Research Assistant - Quantitative Finance',
      company: 'Capitalfund Investment Fund, Wisconsin School of Business',
      period: 'Sept. 2025 - Present',
      description: 'Support development of strategies for managing a portfolio of $1M+ as a part of a student-managed CapitalFund Investment Team using Interactive Brokers, Docker and automated trading tools.\nBuild and refine the production tech stack and data flow, transforming Model State into Aggregate Optimized Positions for live portfolio execution. \nDeveloped model prototypes, including a momentum-based model for SPY with an MVO framework and a reinforcement learning model for global equities, as part of the team’s systematic strategy research.',
      technologies: ['Python', 'Google Cloud Shell', 'Excel', 'Interactive Brokers', 'Docker', 'PyTorch']
    },
    {
      id: 2,
      title: 'Project Intern',
      company: 'Royal Bank of Canada Wealth Management',
      period: 'Sept. 2025 - Present',
      description: 'Working as a team of 3 to build an AI-assisted research analyst tool that integrates financial APIs (Yahoo Finance), sentiment\nfeeds (Reddit, X), and financial news aggregators to automate equity research workflows for portfolio managers.\nBuilding a functional MVP in Python/Streamlit that retrieves, summarizes, and visualizes multi-source insights (fundamentals, earnings surprises, sentiment, and technical indicators), reducing manual research time by over 50%.',
      technologies: ['Python', 'JavaScript', 'HTML', 'LLM API', 'Yahoo Finance', 'Data Scraping', 'Sentiment Analysis']
    },
    {
      id: 3,
      title: 'Peer Mentor',
      company: 'University of Wisconsin - Madison',
      period: 'June 2025 - Present',
      description: 'Help 600+ students understand object-oriented programming, data structures, recursion, and algorithm complexity during office hours and support development of debugging skills during the development of complex weekly projects.\nPromoted after mentoring Programming I class over the summer, leading 4 labs and office hours for 45+ students with\nminimal programming experience in concepts such as control flow, data types, functions and debugging',
      technologies: ['Mentoring', 'Teaching', 'Debugging', 'Algorithm Design', 'Data Structures']
    },
    // Add more experiences as needed
    {
      id: 4,
      title: 'Summer Data Analyst Intern',
      company: 'Al Khayat Contracting LLC, Dubai UAE',
      period: 'July 2023 - July 2023',
      description: 'Assisted senior analysts in compiling and interpreting payment, working capital, and tender data, improving reporting workflows and reducing turnaround times by ~20%, supported by SQL knowledge gained through prior training.',
      technologies: ['Data Analysis', 'Excel', 'SQL', 'Data Visualization']
    },
  ];

  return (
    <div className="portfolio-container">

      <section className="experiences-section">
        <div className="experiences-scroll">
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-card">
              <div className="experience-header">
                <h3>{experience.title}</h3>
                <span className="company">{experience.company}</span>
              </div>
              <span className="period">{experience.period}</span>
              <p className="description">{experience.description}</p>
              <div className="technologies">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
