import './skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', proficiency: 5 },
        { name: 'Java', proficiency: 4 },
        { name: 'R', proficiency: 4 },
        { name: 'SQL', proficiency: 4 },
        { name: 'JavaScript', proficiency: 4 },
        { name: 'C++', proficiency: 4 },
        { name: 'C', proficiency: 3 },
        { name: 'Bash', proficiency: 3 },
        { name: 'HTML', proficiency: 4 },
        { name: 'CSS', proficiency: 3 },
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'PyTorch', proficiency: 4 },
        { name: 'TensorFlow', proficiency: 4 },
        { name: 'scikit-learn', proficiency: 5 },
        { name: 'Pandas', proficiency: 5 },
        { name: 'NumPy', proficiency: 5 },
        { name: 'Polars', proficiency: 3 },
        { name: 'Pydantic', proficiency: 4 },
        { name: 'CARLA', proficiency: 3 },
        { name: 'Statistical Learning', proficiency: 4 },
        { name: 'Reinforcement Learning', proficiency: 3 },
        { name: 'POMDP', proficiency: 3 },
      ]
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Docker', proficiency: 4 },
        { name: 'Git', proficiency: 5 },
        { name: 'GitHub Actions', proficiency: 3 },
        { name: 'React', proficiency: 4 },
        { name: 'FastAPI', proficiency: 4 },
        { name: 'Node.js', proficiency: 3 },
        { name: 'Linux', proficiency: 4 },
        { name: 'Apache Spark', proficiency: 3 },
      ]
    },
    {
      title: 'Cloud & Data',
      skills: [
        { name: 'AWS', proficiency: 3 },
        { name: 'GCP', proficiency: 4 },
        { name: 'BigQuery', proficiency: 4 },
        { name: 'HDFS', proficiency: 3 },
        { name: 'Power BI', proficiency: 3 },
      ]
    },
    {
      title: 'Quantitative Finance',
      skills: [
        { name: 'Interactive Brokers', proficiency: 4 },
        { name: 'Yahoo Finance API', proficiency: 5 },
        { name: 'Statistical Modeling', proficiency: 4 },
        { name: 'Time Series Analysis', proficiency: 4 },
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
