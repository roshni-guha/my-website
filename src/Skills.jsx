import { useEffect, useRef } from 'react';
import './skills.css';

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      sectionRef.current?.classList.add('skills-loaded');
    }, 120);
    return () => clearTimeout(timer);
  }, []);
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', proficiency: 5 },
        { name: 'C++', proficiency: 4 },
        { name: 'Java', proficiency: 4 },
        { name: 'JavaScript', proficiency: 4 },
        { name: 'SQL', proficiency: 4 },
        { name: 'R', proficiency: 4 },
        { name: 'C', proficiency: 3 },
        { name: 'Bash', proficiency: 3 },
        { name: 'Assembly', proficiency: 2 },
      ]
    },
    {
      title: 'ML & Data',
      skills: [
        { name: 'PyTorch', proficiency: 4 },
        { name: 'scikit-learn', proficiency: 5 },
        { name: 'Pandas', proficiency: 5 },
        { name: 'NumPy', proficiency: 5 },
        { name: 'Polars', proficiency: 3 },
        { name: 'Pydantic', proficiency: 4 },
        { name: 'CARLA', proficiency: 3 },
        { name: 'Reinforcement Learning', proficiency: 4 },
        { name: 'POMDP', proficiency: 3 },
      ]
    },
    {
      title: 'Infra & Tools',
      skills: [
        { name: 'GCP', proficiency: 4 },
        { name: 'Docker', proficiency: 4 },
        { name: 'GitHub Actions', proficiency: 3 },
        { name: 'AWS', proficiency: 3 },
        { name: 'FastAPI', proficiency: 4 },
        { name: 'React', proficiency: 4 },
        { name: 'Linux', proficiency: 4 },
        { name: 'Git', proficiency: 5 },
        { name: 'Redis', proficiency: 3 },
        { name: 'Playwright', proficiency: 3 },
      ]
    },
    {
      title: 'Quantitative Finance',
      skills: [
        { name: 'IB Gateway', proficiency: 4 },
        { name: 'Yahoo Finance API', proficiency: 5 },
        { name: 'Statistical Modeling', proficiency: 4 },
        { name: 'Time Series Analysis', proficiency: 4 },
        { name: 'Portfolio Optimization', proficiency: 3 },
      ]
    }
  ];

  let dotSeq = 0;

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <span className="ghost-title">Skills</span>
      <div className="section-header">
        <div className="section-number">03</div>
        <h2 className="section-title">Technical Expertise</h2>
        <div className="section-divider"></div>
        <p className="section-description">
          A comprehensive foundation in computer science, mathematics, and quantitative finance,
          cultivated through rigorous academic study and practical application.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <div className="skill-header">
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            <div className="skill-items">
              {category.skills.map((skill, skillIndex) => {
                const delay = (dotSeq++) * 18;
                return (
                <div key={skillIndex} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-proficiency">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <span
                        key={level}
                        className={`proficiency-dot ${level <= skill.proficiency ? 'filled' : ''}`}
                        style={level <= skill.proficiency ? { '--dot-delay': `${delay}ms` } : {}}
                      ></span>
                    ))}
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
