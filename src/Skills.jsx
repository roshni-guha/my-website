import './skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', proficiency: 5 },
        // { name: 'C++', proficiency: 5 },
        { name: 'Java', proficiency: 4 },
        { name: 'R', proficiency: 4 },
        { name: 'SQL', proficiency: 4 },
        { name: 'JavaScript', proficiency: 4 }
      ]
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'PyTorch', proficiency: 4 },
        { name: 'TensorFlow', proficiency: 4 },
        { name: 'scikit-learn', proficiency: 5 },
        { name: 'Pandas', proficiency: 5 },
        { name: 'NumPy', proficiency: 5 }
      ]
    },
    {
      title: 'Systems Engineering',
      skills: [
        { name: 'Docker', proficiency: 4 },
        // { name: 'Kubernetes', proficiency: 3 },
        { name: 'Git', proficiency: 5 },
        // { name: 'Linux', proficiency: 4 },
        // { name: 'AWS/GCP', proficiency: 4 }
      ]
    },
    {
      title: 'Quantitative Finance',
      skills: [
        { name: 'Interactive Brokers', proficiency: 4 },
        { name: 'Yahoo Finance API', proficiency: 5 },
        { name: 'Statistical Modeling', proficiency: 4 },
        { name: 'Time Series Analysis', proficiency: 4 }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
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
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-proficiency">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <span
                        key={level}
                        className={`proficiency-dot ${level <= skill.proficiency ? 'filled' : ''}`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
