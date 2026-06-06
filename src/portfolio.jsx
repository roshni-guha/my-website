import { useState } from 'react';
import './portfolio.css';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('experiences');

  // Experiences data
  const experiences = [
    {
      id: 1,
      title: 'AI Engineering Intern',
      company: 'Voyager AI',
      period: 'June 2026 – August 2026',
      status: 'ACTIVE',
      description: 'Building OCR and document classification pipelines in Python on AWS for a secure AI platform automating financial document processing and AML compliance for institutional clients.\nDeveloping RAG pipelines and LLM orchestration with auditability infrastructure ensuring regulatory traceability of AI outputs in production.',
      technologies: ['Python', 'AWS', 'OCR', 'RAG', 'LLM Orchestration', 'AML Compliance'],
      metrics: [
        { value: 'AWS', label: 'Cloud Platform' },
        { value: 'RAG', label: 'Pipeline Type' },
        { value: 'AML', label: 'Compliance Focus' }
      ]
    },
    {
      id: 2,
      title: 'Machine Learning Researcher',
      company: 'Human Factors and Machine Learning Lab, UW–Madison',
      period: 'May 2026 – August 2026',
      status: 'ACTIVE',
      description: 'Conducting research at a lab previously sponsored by Waymo and NSF, now supported by AmFam Insurance, modeling human-AV interaction using POMDP to predict driver behavior based on beliefs about autonomous vehicle intent.\nBuilding a CARLA simulation environment to model human and autonomous vehicle interaction, generating synthetic training data for probabilistic driver behavior models.',
      technologies: ['Python', 'CARLA', 'POMDP', 'Probabilistic Modeling', 'Simulation', 'PyTorch'],
      metrics: [
        { value: 'POMDP', label: 'Modeling Framework' },
        { value: 'CARLA', label: 'Simulation Env' },
        { value: 'AmFam', label: 'Sponsor' }
      ]
    },
    {
      id: 3,
      title: 'Systems Analyst Intern',
      company: 'Wisconsin Department of Revenue',
      period: 'May 2026 – August 2026',
      status: 'ACTIVE',
      description: 'Analyzing and documenting dataflow across Oracle RDBMS-backed taxation systems using Visio and Power BI; mapping system interdependencies and producing technical documentation for infrastructure modernization.',
      technologies: ['Oracle RDBMS', 'Power BI', 'Visio', 'SQL', 'Technical Documentation'],
      metrics: [
        { value: 'Oracle', label: 'Database' },
        { value: 'Power BI', label: 'Visualization' },
        { value: 'Gov', label: 'Sector' }
      ]
    },
    {
      id: 4,
      title: 'Quantitative Developer',
      company: 'CapitalFund Investment Team',
      period: 'Sept 2025 – Present',
      status: 'ACTIVE',
      description: 'Contribute to systematic data pipelines on GCP (BigQuery, Cloud Run) ingesting FactSet financial data with Pydantic schema validation; work within a production trading system for live execution of a $1M+ portfolio.\nDeveloped a momentum-based fixed income allocator with cross-asset benchmark filtering and a drawdown-differential state machine override; Sharpe improved 61% on investment grade credit via the override mechanism.',
      technologies: ['Python', 'GCP', 'BigQuery', 'Cloud Run', 'FactSet', 'Pydantic', 'Docker'],
      metrics: [
        { value: '$1M+', label: 'Portfolio Managed' },
        { value: '61%', label: 'Sharpe Improvement' },
        { value: 'Live', label: 'Trading System' }
      ]
    },
    {
      id: 5,
      title: 'Project Intern',
      company: 'Royal Bank of Canada Wealth Management',
      period: 'Sept. 2025 - Present',
      status: 'COMPLETED',
      description: 'Working as a team of 3 to build an AI-assisted research analyst tool that integrates financial APIs (Yahoo Finance), sentiment\nfeeds (Reddit, X), and financial news aggregators to automate equity research workflows for portfolio managers.\nBuilding a functional MVP in Python/Streamlit that retrieves, summarizes, and visualizes multi-source insights (fundamentals, earnings surprises, sentiment, and technical indicators), reducing manual research time by over 50%.',
      technologies: ['Python', 'JavaScript', 'HTML', 'LLM API', 'Yahoo Finance', 'Data Scraping', 'Sentiment Analysis'],
      metrics: [
        { value: '20+', label: 'Portfolio Managers' },
        { value: '50%', label: 'Time Saved' },
        { value: 'Multi', label: 'Source Analysis' }
      ]
    },
    {
      id: 6,
      title: 'Peer Mentor',
      company: 'University of Wisconsin - Madison',
      period: 'June 2025 - Present',
      status: 'COMPLETED',
      description: 'Help 600+ students understand object-oriented programming, data structures, recursion, and algorithm complexity during office hours and support development of debugging skills during the development of complex weekly projects.\nPromoted after mentoring Programming I class over the summer, leading 4 labs and office hours for 45+ students with\nminimal programming experience in concepts such as control flow, data types, functions and debugging',
      technologies: ['Mentoring', 'Teaching', 'Debugging', 'Algorithm Design', 'Data Structures'],
      metrics: [
        { value: '600+', label: 'Students Helped' },
        { value: '4', label: 'Weekly Labs' },
        { value: 'Promoted', label: 'After Summer' }
      ]
    },
    {
      id: 7,
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
      file: '/IITK.pdf'
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
      title: 'International Olympiad UAE Top 10 in Five Subjects',
      event: 'International Olympiad Organization',
      period: 'January 2023',
      description: 'Ranked in UAE Top 10 for Chemistry (#4), Physics (#5), Mathematics (#4), English (#7), and Cyber (#4).',
    },
    {
      id: 3,
      title: 'Grand Awardee – 10th India Middle East Education Awards 2024',
      event: 'Yallaschools UAE',
      period: 'June 2024',
      description: 'Recognized for academic excellence among top CBSE/ISC Grade 12 achievers across over 60 Indian schools in the Middle East, nominated by the school and selected from over 10,000 students across six countries.',
    },
    {
      id: 4,
      title: 'Most Innovative Award by Samsung',
      event: 'Project Design Space, Dubai Institute of Design and Innovation',
      period: 'October 2023',
      description: 'Developed a sustainable cat food dispenser model utilizing recycled Samsung TV boxes to promote environmental responsibility and minimize cardboard waste.',
      file: '/PDS Manual.pdf',
      link: 'https://drive.google.com/file/d/1zQwZmydhKXgpoeiV6dou6mGmdByB_aMN/view?usp=share_link'
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
      period: 'Jan 2026 - May 2026',
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

  // Events data
  const events = [
    {
      id: 1,
      title: 'Future Innovators Series',
      organization: 'Blackstone',
      period: 'May 2026 - Present',
      description: 'Participating in a mentorship pod led by Blackstone industry professionals working in technology and innovation, gaining insights into career pathways and emerging trends at the intersection of finance and technology.',
    },
    {
      id: 2,
      title: 'Emerging Leaders Series - Dallas Engineering',
      organization: 'Goldman Sachs',
      period: 'April 2026',
      description: 'In-person event in Dallas for selected engineering students to network with Goldman Sachs leaders and explore career opportunities in technology and finance.',
    },
    {
      id: 3,
      title: 'Virtual Insight Series',
      organization: 'Goldman Sachs',
      period: 'May - June 2025',
      description: 'Completed four-week program exploring firm divisions and career pathways',
    },
    {
      id: 4,
      title: 'Sophomore Showcase',
      organization: 'JP Morgan Chase',
      period: 'April 2025',
      description: 'Participated in a virtual event designed for second-year students to explore career opportunities and network with professionals at JP Morgan Chase.',
    },
    {
      id: 5,
      title: 'Women in Wealth: LIFT - College Leadership Summit',
      organization: 'Morgan Stanley',
      period: 'April 2025',
      description: 'Attended a virtual leadership summit focused on empowering women in finance through workshops, networking, and skill-building sessions.',
    },
    {
      id: 6,
      title: 'Women\'s Possibilities Summit',
      organization: 'Goldman Sachs',
      period: 'January - December 2025',
      description: 'Chosen among 14000+ to participate in a year-long program focused on leadership development, networking, and career growth for women',
    },
    {
      id: 7,
      title: 'Freshman Focus',
      organization: 'JP Morgan Chase',
      period: 'April 2025',
      description: 'Participated in a virtual event designed for first-year students to explore career opportunities and network with professionals at JP Morgan Chase.',
    },
  ];

  const sections = [
    { id: 'experiences', label: 'Experiences' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'awards', label: 'Awards' },
    { id: 'extracurricular', label: 'Extracurricular' },
    { id: 'events', label: 'Events' }
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
                <div className="card-top">
                  <div className="experience-header">
                    <h3>{cert.title}</h3>
                  </div>
                  <span className="period">{cert.period}</span>
                </div>
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
                <div className="card-top">
                  <div className="experience-header">
                    <h3>{award.title}</h3>
                  </div>
                  <span className="company">{award.event}</span>
                  <span className="period">{award.period}</span>
                </div>
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
                <div className="card-top">
                  <div className="experience-header">
                    <h3>{item.title}</h3>
                    <span className="status-badge-exp status-category">
                      {item.category}
                    </span>
                  </div>
                  <span className="period">{item.period}</span>
                </div>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Events Section */}
      {activeSection === 'events' && (
        <section className="experiences-section">
          <div className="section-header">
            <h2 className="section-number">05 | EVENTS</h2>
            <div className="section-divider"></div>
          </div>
          <div className="experiences-scroll">
            {events.map((event) => (
              <div key={event.id} className="experience-card">
                <div className="card-top">
                  <div className="experience-header">
                    <h3>{event.title}</h3>
                  </div>
                  <span className="company">{event.organization}</span>
                  <span className="period">{event.period}</span>
                </div>
                <p className="description">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

export default Portfolio;
