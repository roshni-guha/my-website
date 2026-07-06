import { useState, useEffect } from 'react';
import './portfolio.css';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('experiences');

  // Experiences data
  const experiences = [
    {
      id: 1,
      title: 'AI Engineering Intern',
      company: 'Voyager AI',
      location: 'Wauwatosa, WI',
      period: 'June 2026 – August 2026',
      status: 'ACTIVE',
      logo: '/logos/VoyagerAI-logo.png',
      description: 'Reduced FDIC API lookup latency by 96% and institution ID resolution by 95% through Redis caching, automating institution onboarding from the FDIC BankFind Suite and NCUA APIs to eliminate manual data entry.\nBuilt automated end-to-end testing infrastructure using Playwright and Selenium covering the full feature surface of the platform, giving the engineering team confidence to ship to production faster and with fewer regressions.',
      technologies: ['Python', 'Redis', 'Playwright', 'Selenium', 'FDIC BankFind API', 'NCUA API'],
      metrics: [
        { value: '96%', label: 'Latency Reduction' },
        { value: '95%', label: 'ID Resolution' },
        { value: 'E2E', label: 'Test Coverage' }
      ]
    },
    {
      id: 2,
      title: 'Machine Learning Researcher',
      company: 'Human Factors and Machine Learning Lab, UW–Madison',
      location: 'Madison, WI',
      period: 'May 2026 – August 2026',
      status: 'ACTIVE',
      logo: '/logos/ml_research.jpeg',
      description: 'Engineered CARLA simulation environments to generate synthetic training data for probabilistic driver behavior models; contributing to POMDP-based autonomous driving research funded by NSF and AmFam Insurance.\nDeveloped active inference models of driver behavior using the free energy principle to predict how humans respond to vehicle automation handoffs, validated against real-world naturalistic driving data.',
      technologies: ['Python', 'CARLA', 'POMDP', 'Active Inference', 'PyTorch', 'Free Energy Principle'],
      metrics: [
        { value: 'POMDP', label: 'Modeling Framework' },
        { value: 'NSF', label: 'Funded By' },
        { value: 'CARLA', label: 'Simulation Env' }
      ]
    },
    {
      id: 3,
      title: 'Systems Analyst Intern',
      company: 'Wisconsin Department of Revenue',
      location: 'Madison, WI',
      period: 'May 2026 – August 2026',
      status: 'ACTIVE',
      logo: '/logos/wirevenue_logo.jpeg',
      description: 'Analyzed and documented dataflow across a 20-year-old Oracle RDBMS property tax system spanning 4 departments, 14 transactions, and 115 tables; produced technical documentation to support a planned infrastructure overhaul.',
      technologies: ['Oracle RDBMS', 'SQL', 'Power BI', 'Visio', 'Technical Documentation'],
      metrics: [
        { value: '115', label: 'Tables Mapped' },
        { value: '4', label: 'Departments' },
        { value: '20 yrs', label: 'Legacy System' }
      ]
    },
    {
      id: 4,
      title: 'Quantitative Developer',
      company: 'CapitalFund Investment Team',
      location: 'Madison, WI',
      period: 'Sept 2025 – Present',
      status: 'ACTIVE',
      logo: '/logos/hawk_center_for_investment_analysis_logo.jpeg',
      description: 'Achieved 13.3% annualized return and Sharpe 0.75 on 11 years of held-out data by developing a reinforcement learning model for a student-run $1M+ portfolio; cut training time by 60% through vectorized preprocessing and O(1) hash map lookups replacing repeated DataFrame scans.\nContributed to production infrastructure including GCP data pipelines, a Rust-based backtesting engine, and live trade execution via IB Gateway, supported by automated CI/CD and containerized deployment.',
      technologies: ['Python', 'GCP', 'Rust', 'IB Gateway', 'Docker', 'CI/CD', 'BigQuery'],
      metrics: [
        { value: '13.3%', label: 'Annualized Return' },
        { value: '0.75', label: 'Sharpe Ratio' },
        { value: '$1M+', label: 'Portfolio' }
      ]
    },
    {
      id: 5,
      title: 'Project Intern',
      company: 'Royal Bank of Canada Wealth Management',
      location: 'Madison, WI',
      period: 'Sept 2025 – Jan 2026',
      status: 'COMPLETED',
      logo: '/logos/RBC.png',
      description: 'Built a full-stack equity research tool in Python and Node.js that aggregated signals from financial APIs, Reddit, and news feeds; designed RESTful API endpoints and a data normalization layer, reducing analyst research time by over 50%.',
      technologies: ['Python', 'Node.js', 'RESTful API', 'Yahoo Finance API', 'Reddit API', 'News APIs'],
      metrics: [
        { value: '50%', label: 'Time Saved' },
        { value: 'REST', label: 'API Design' },
        { value: 'Multi', label: 'Source Signals' }
      ]
    },
    {
      id: 6,
      title: 'Undergraduate Teaching Assistant',
      company: 'University of Wisconsin – Madison',
      location: 'Madison, WI',
      period: 'June 2025 – Present',
      status: 'COMPLETED',
      logo: '/logos/uw_CS.jpeg',
      description: 'Guided 600+ students through data structures, asymptotic analysis, recursion, graph algorithms, and OOP; promoted after leading an introductory programming course for 45+ students earlier that summer.',
      technologies: ['Data Structures', 'Algorithms', 'OOP', 'Graph Theory', 'Asymptotic Analysis'],
      metrics: [
        { value: '600+', label: 'Students' },
        { value: '45+', label: 'Intro Course' },
        { value: 'Promoted', label: 'Recognition' }
      ]
    },
    {
      id: 7,
      title: 'Summer Data Analyst Intern',
      company: 'Al Khayat Contracting LLC, Dubai UAE',
      period: 'July 2023',
      status: 'COMPLETED',
      logo: null,
      logoInitials: 'AK',
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

  useEffect(() => {
    if (activeSection !== 'experiences') return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll('.timeline-entry').forEach(el => observer.observe(el));
    }, 60);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [activeSection]);

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

      {/* Experiences Timeline */}
      {activeSection === 'experiences' && (
        <section className="experiences-section">
          <span className="ghost-title">Experience</span>
          <div className="section-header">
            <h2 className="section-number">01 | PORTFOLIO</h2>
            <div className="section-divider"></div>
          </div>
          <div className="timeline-wrapper">
            <div className="timeline-track"></div>
            {experiences.map((exp, index) => {
              const isOdd = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`timeline-entry ${isOdd ? 'entry-odd' : 'entry-even'} ${exp.status === 'ACTIVE' ? 'entry-active' : ''}`}
                >
                  {/* Details */}
                  <div className="entry-details">
                    <div className="entry-meta">
                      <span className="entry-period">{exp.period}</span>
                      {exp.location && <span className="entry-location">{exp.location}</span>}
                      <span className={`status-badge-exp status-${exp.status.toLowerCase()}`}>
                        {exp.status === 'ACTIVE' && <span className="status-dot-exp"></span>}
                        {exp.status}
                      </span>
                    </div>
                    <h3 className="entry-title">{exp.title}</h3>
                    <p className="entry-company">{exp.company}</p>
                    <p className="entry-desc">{exp.description}</p>
                    <div className="entry-tags">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    {exp.metrics && (
                      <div className="entry-metrics">
                        {exp.metrics.map((m, i) => (
                          <div key={i} className="entry-metric">
                            <span className="metric-value">{m.value}</span>
                            <span className="metric-label">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="timeline-node">
                    <div className="node-dot"></div>
                  </div>

                  {/* Logo */}
                  <div className="entry-logo-panel">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} className="entry-logo-img" />
                    ) : (
                      <div className="entry-logo-fallback">{exp.logoInitials}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {activeSection === 'certifications' && (
        <section className="experiences-section">
          <span className="ghost-title">Certified</span>
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
          <span className="ghost-title">Awards</span>
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
          <span className="ghost-title">Activities</span>
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
          <span className="ghost-title">Events</span>
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
