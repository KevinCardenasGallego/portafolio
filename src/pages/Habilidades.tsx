import React from 'react';

interface Skill {
  category: string;
  items: string[];
}

export default function Habilidades() {
  const skills: Skill[] = [
    {
      category: "Analítica de Datos",
      items: ["PySpark", "Databricks", "Delta Lake", "BigQuery", "Cloud Storage", "Dataproc", "Python", "SQL"]
    },
    {
      category: "Cloud & Infraestructura",
      items: ["GCP (BigQuery, Cloud Storage, Dataproc)", "AWS (S3, Lambda)", "Docker", "Serverless"]
    },
    {
      category: "Desarrollo Full Stack",
      items: ["Python", "React", "TypeScript", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Bases de Datos",
      items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"]
    },
    {
      category: "Liderazgo & Gestión",
      items: ["Gestión de Equipos", "Arquitectura de Soluciones", "Metodologías Ágiles", "Toma de Decisiones Data-Driven"]
    },
    {
      category: "Matemáticas",
      items: ["Ecuaciones Diferenciales Estocásticas", "Estadística", "Álgebra Lineal", "Cálculo", "Modelado Matemático"]
    }
  ];

  const tools = [
    "Git", "GitHub", "VS Code", "Databricks", "Docker", 
    "GCP Console", "AWS Console", "Jupyter", "Postman"
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
