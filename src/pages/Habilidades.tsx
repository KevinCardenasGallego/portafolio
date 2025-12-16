import React from 'react';

interface Skill {
  category: string;
  items: string[];
}

export default function Habilidades() {
  const skills: Skill[] = [
    {
      category: "Data & Analytics",
      items: ["Python", "SQL", "Spark", "Databricks", "ADF", "Airflow", "Delta Lake", "Pandas"]
    },
    {
      category: "Backend Development",
      items: ["FastAPI", "C#", ".NET", "REST APIs", "Auth/OAuth", "PostgreSQL", "DynamoDB"]
    },
    {
      category: "Frontend Development",
      items: ["React", "TypeScript", "JavaScript", "MUI", "Vite", "HTML/CSS"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Lambda, S3, API Gateway)", "Azure (Functions, ADLS)", "Docker", "CI/CD", "GitHub Actions"]
    },
    {
      category: "Quality & Testing",
      items: ["Data Quality frameworks", "Unit Testing", "Observability", "Performance Testing"]
    },
    {
      category: "Matemáticas & Análisis",
      items: ["Estadística", "Álgebra Lineal", "Cálculo", "Optimización", "Modelado Matemático"]
    }
  ];

  const tools = [
    "Git", "VS Code", "Jupyter", "Postman", "Docker", "Azure Portal", 
    "AWS Console", "Databricks", "Power BI", "Excel"
  ];

  return (
    <div className="page-content">
      <h1 className="page-title">Habilidades</h1>
      <p className="page-description">
        Tecnologías y herramientas con las que trabajo regularmente para 
        construir soluciones robustas y escalables.
      </p>

      <div className="skills-section">
        <h2 className="section-subtitle">Áreas de Especialización</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{skill.category}</h3>
              <div className="skill-items">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tools-section">
        <h2 className="section-subtitle">Herramientas</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item">{tool}</div>
          ))}
        </div>
      </div>

      <div className="competencies-section">
        <h2 className="section-subtitle">Competencias Clave</h2>
        <div className="competencies-list">
          <div className="competency-item">
            <div className="competency-icon">🎯</div>
            <div className="competency-content">
              <h4>Resolución de Problemas</h4>
              <p>Análisis profundo y soluciones creativas a desafíos técnicos complejos</p>
            </div>
          </div>
          <div className="competency-item">
            <div className="competency-icon">🚀</div>
            <div className="competency-content">
              <h4>Desarrollo Ágil</h4>
              <p>Iteración rápida y entrega continua de valor</p>
            </div>
          </div>
          <div className="competency-item">
            <div className="competency-icon">📈</div>
            <div className="competency-content">
              <h4>Optimización</h4>
              <p>Mejora de rendimiento y eficiencia de sistemas</p>
            </div>
          </div>
          <div className="competency-item">
            <div className="competency-icon">🤝</div>
            <div className="competency-content">
              <h4>Trabajo en Equipo</h4>
              <p>Colaboración efectiva en equipos multidisciplinarios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
