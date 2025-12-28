import { useState } from 'react';
import './portfolio.css';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('experiences');

  // Experiences data
  const experiences = [
    {
      id: 1,
      title: 'Undergraduate Research Assistant - Quantitative Finance',
      company: 'Capitalfund Investment Fund, Wisconsin School of Business',
      period: 'Sept. 2025 - Present',
      status: 'ACTIVE',
      description: 'Support development of strategies for managing a portfolio of $1M+ as a part of a student-managed CapitalFund Investment Team using Interactive Brokers, Docker and automated trading tools.\nBuild and refine the production tech stack and data flow, transforming Model State into Aggregate Optimized Positions for live portfolio execution. \nDeveloped model prototypes, including a momentum-based model for SPY with an MVO framework and a reinforcement learning model for global equities, as part of the team\'s systematic strategy research.',
      technologies: ['Python', 'Google Cloud Shell', 'Excel', 'Interactive Brokers', 'Docker', 'PyTorch'],
      metrics: [
        { value: '$1M+', label: 'Portfolio Managed' },
        { value: '50%+', label: 'Research Efficiency' },
        { value: 'Live', label: 'Trading System' }
      ]
    },
    {
      id: 2,
      title: 'Project Intern',
      company: 'Royal Bank of Canada Wealth Management',
      period: 'Sept. 2025 - Present',
      status: 'ACTIVE',
      description: 'Working as a team of 3 to build an AI-assisted research analyst tool that integrates financial APIs (Yahoo Finance), sentiment\nfeeds (Reddit, X), and financial news aggregators to automate equity research workflows for portfolio managers.\nBuilding a functional MVP in Python/Streamlit that retrieves, summarizes, and visualizes multi-source insights (fundamentals, earnings surprises, sentiment, and technical indicators), reducing manual research time by over 50%.',
      technologies: ['Python', 'JavaScript', 'HTML', 'LLM API', 'Yahoo Finance', 'Data Scraping', 'Sentiment Analysis'],
      metrics: [
        { value: '20+', label: 'Portfolio Managers' },
        { value: '50%', label: 'Time Saved' },
        { value: 'Multi', label: 'Source Analysis' }
      ]
    },
    {
      id: 3,
      title: 'Peer Mentor',
      company: 'University of Wisconsin - Madison',
      period: 'June 2025 - Present',
      status: 'ONGOING',
      description: 'Help 600+ students understand object-oriented programming, data structures, recursion, and algorithm complexity during office hours and support development of debugging skills during the development of complex weekly projects.\nPromoted after mentoring Programming I class over the summer, leading 4 labs and office hours for 45+ students with\nminimal programming experience in concepts such as control flow, data types, functions and debugging',
      technologies: ['Mentoring', 'Teaching', 'Debugging', 'Algorithm Design', 'Data Structures'],
      metrics: [
        { value: '600+', label: 'Students Helped' },
        { value: '4', label: 'Weekly Labs' },
        { value: 'Promoted', label: 'After Summer' }
      ]
    },
    {
      id: 4,
      title: 'Summer Data Analyst Intern',
      company: 'Al Khayat Contracting LLC, Dubai UAE',
      period: 'July 2023 - July 2023',
      status: 'COMPLETED',
      description: 'Assisted senior analysts in compiling and interpreting payment, working capital, and tender data, improving reporting workflows and reducing turnaround times by ~20%, supported by SQL knowledge gained through prior training.',
      technologies: ['Data Analysis', 'Excel', 'SQL', 'Data Visualization'],
      metrics: [
        { value: '20%', label: 'Faster Reporting' },
        { value: 'SQL', label: 'Data Analysis' },
        { value: 'Dubai', label: 'UAE' }
      ]
    },
  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      title: 'IIT Kanpur Summer Training in Machine Learning',
      // issuer: 'IIT Kanpur',
      period: 'August 2025',
      description: 'Mastered designing, implementing, and evaluating supervised and unsupervised ML models using Python. Engineered features, optimized algorithms (e.g., regression, decision trees, SVM, k-NN, K-means), and performed data preprocessing and analytics with Pandas and NumPy. Applied model interpretability tools (SHAP, LIME) and delivered end-to-end ML solutions.',
      file: 'public/IITK.pdf'
    },
    {
      id: 2,
      title: 'Bloomberg Market Concepts (BMC)',
      // issuer: 'Amazon Web Services',
      period: 'May 2025',
      description: 'Basic understanding of financial markets, instruments, and concepts.',
      link: 'https://portal.bloombergforeducation.com/certificates/8zy3HBW3eJk53poBuGgPXS6m'
    },
    {
      id: 3,
      title: 'Goldman Sachs Controllers Job Simulation on Forage',
      period: 'March 2025',
      description: 'Completed a job simulation involving financial analysis and reporting. Developed analytical skills through calculating Net Asset Valuation (NAV) and unitizing financial data. Utilized Excel for detailed financial analysis, data validation, and trend analysis, leading to accurate financial reporting and reconciliation.',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/vjFao7z4tXKe2EwvK_MBA4MnZTNFEoJZGnk_WJSweXA52tvkh4dGD_1743129973453_completion_certificate.pdf'
    },
  ];

  // Awards data
  const awards = [
    {
      id: 1,
      title: 'Dean\'s List',
      event: 'University of Wisconsin-Madison',
      period: 'Fall 2024, Spring 2025, Fall 2025',
      description: 'Recognized for academic excellence with GPA above 3.6.',
    },
    {
      id: 2,
      title: 'Grand Awardee – 10th India Middle East Education Awards 2024',
      event: 'Yallaschools UAE',
      period: 'June 2024',
      description: 'Recognized for academic excellence among top CBSE/ISC Grade 12 achievers across over 60 Indian schools in the Middle East, nominated by the school and selected from over 10,000 students across six countries.',
    },
    {
      id: 3,
      title: 'Most Innovative Award by Samsung',
      event: 'Project Design Space, Dubai Institute of Design and Innovation',
      period: 'October 2023',
      description: 'Developed a sustainable cat food dispenser model utilizing recycled Samsung TV boxes to promote environmental responsibility and minimize cardboard waste.',
      file: 'public/PDS Manual.pdf',
      link: 'https://drive.google.com/file/d/1zQwZmydhKXgpoeiV6dou6mGmdByB_aMN/view?usp=share_link'
    },
    {
      id: 4,
      title: 'International Olympiad UAE Top 10 in Five Subjects',
      event: 'International Olympiad Organization',
      period: 'January 2023',
      description: 'Ranked in UAE Top 10 for Chemistry (#4), Physics (#5), Mathematics (#4), English (#7), and Cyber (#4).',
    },
    {
      id: 5,
      title: 'CBSE Felicitation',
      event: 'Central Board of Secondary Education, India',
      period: 'October 2022',
      description: 'Received felicitation for achieving a full 100% score in Mathematics and Computer Applications during tenth board examinations.',
    },
    {
      id: 6,
      title: 'ASSET Talent Scholar - Silver Medalist in UAE (Top 50)',
      event: 'Assessment of Scholastic Skills through Educational Testing',
      period: 'November 2021',
      description: 'Achieved a high score ranking among the top 50 students in the United Arab Emirates who took the ASSET exam.',
    },
    {
      id: 7,
      title: 'Runners up for U14 Girls Swimming National Campionship',
      event: 'CBSE National Swimming Championship',
      period: 'November 2018',
      description: 'Competed as a part of the Indian High School\'s girls U14 swimming team winning a two silver medals in UAE CBSE clusters and qualifying for CBSE Nationals held in Ranchi, India where we won first runners up. Qualified for 400m Freestyle relay and 400m Medley relay with me swimming 100m butterfly for the latter.',
    }
  ];

  // Extracurricular/Academics data
  const extracurricular = [
    {
      id: 1,
      title: 'Vice President for Software Development - Cardinal Trading Group',
      category: 'Leadership',
      period: 'Jan 2026 - Present',
      description: 'Lead organization of 200+ members, organizing tech talks, workshops, and hackathons.',
    },
    {
      id: 2,
      title: 'Children\'s Volunteer',
      category: 'Volunteering',
      period: 'July 2016 - August 2023',
      description: 'Volunteered at a kindergarten every summer break. Lead a Swachh Bharat campaign to raise awareness about cleanliness and a tree-planting campaign simultaneously. Additionally, provided computer and technology courses to children.',
    },
  ];

  const sections = [
    { id: 'experiences', label: 'Experiences' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'awards', label: 'Awards' },
    { id: 'extracurricular', label: 'Extracurricular' }
  ];

  return (
    <div className="portfolio-container">

      {/* Navigation Menu */}
      <nav className="portfolio-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`portfolio-nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Experiences Section */}
      {activeSection === 'experiences' && (
        <section className="experiences-section">
          <div className="section-header">
            <h2 className="section-number">01 | PORTFOLIO</h2>
            <div className="section-divider"></div>
          </div>
          <div className="experiences-scroll">
            {experiences.map((experience) => (
              <div key={experience.id} className="experience-card">
                <div className="card-top">
                  <div className="experience-header">
                    <h3>{experience.title}</h3>
                    <span className={`status-badge-exp status-${experience.status.toLowerCase()}`}>
                      {experience.status === 'ACTIVE' && <span className="status-dot-exp"></span>}
                      {experience.status}
                    </span>
                  </div>
                  <span className="company">{experience.company}</span>
                  <span className="period">{experience.period}</span>
                </div>

                {/* Metrics Box */}
                <div className="metrics-box">
                  <div className="metrics-header">KEY IMPACT:</div>
                  <div className="metrics-grid">
                    {experience.metrics.map((metric, index) => (
                      <div key={index} className="metric-item">
                        <span className="metric-value">{metric.value}</span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

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
      )}

      {/* Certifications Section */}
      {activeSection === 'certifications' && (
        <section className="experiences-section">
          <div className="section-header">
            <h2 className="section-number">02 | CERTIFICATIONS</h2>
            <div className="section-divider"></div>
          </div>
          <div className="experiences-scroll">
            {certifications.map((cert) => (
              <div key={cert.id} className="experience-card">
                <div className="experience-header">
                  <h3>{cert.title}</h3>
                </div>
                <span className="period">{cert.period}</span>
                <p className="description">{cert.description}</p>
                {(cert.file || cert.link) && (
                  <div className="cert-link-wrapper">
                    <a
                      href={cert.file || cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      {cert.file ? 'View Certificate' : 'View Certificate'}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Awards Section */}
      {activeSection === 'awards' && (
        <section className="experiences-section">
          <div className="section-header">
            <h2 className="section-number">03 | AWARDS</h2>
            <div className="section-divider"></div>
          </div>
          <div className="experiences-scroll">
            {awards.map((award) => (
              <div key={award.id} className="experience-card">
                <div className="experience-header">
                  <h3>{award.title}</h3>
                  <span className="company">{award.event}</span>
                </div>
                <span className="period">{award.period}</span>
                <p className="description">{award.description}</p>
                {(award.file || award.link) && (
                  <div className="cert-link-wrapper">
                    {award.file && (
                      <a
                        href={award.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                        style={{ marginRight: '10px' }}
                      >
                        View File 1
                      </a>
                    )}
                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                      >
                        View File 2
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extracurricular/Academics Section */}
      {activeSection === 'extracurricular' && (
        <section className="experiences-section">
          <div className="section-header">
            <h2 className="section-number">04 | EXTRACURRICULAR</h2>
            <div className="section-divider"></div>
          </div>
          <div className="experiences-scroll">
            {extracurricular.map((item) => (
              <div key={item.id} className="experience-card">
                <div className="experience-header">
                  <h3>{item.title}</h3>
                  <span className="status-badge-exp status-category">
                    {item.category}
                  </span>
                </div>
                <span className="period">{item.period}</span>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

export default Portfolio;
