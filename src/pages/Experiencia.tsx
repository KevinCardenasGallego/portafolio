import React from 'react';

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function Experiencia() {
  const experiences: Experience[] = [
    {
      position: "Director General & Desarrollador Full Stack",
      company: "Ashtronic",
      period: "2024 - Actual",
      description: "Liderazgo estratégico y desarrollo técnico: dirijo equipos multidisciplinarios, gestiono relaciones con clientes y alianzas, mientras desarrollo soluciones full stack, ingeniería de datos, pipelines de analítica y soluciones de IA.",
      achievements: [
        "Dirijo la estrategia de la compañía y gestión de equipos multidisciplinarios",
        "Desarrollo aplicaciones web completas con stack moderno (React, Python, TypeScript)",
        "Construyo pipelines de datos y soluciones de ingeniería de datos escalables",
        "Implemento soluciones de IA y automatización para optimización de procesos",
        "Gestiono relaciones con clientes, alianzas estratégicas y portafolio de proyectos"
      ],
      technologies: ["Liderazgo", "Python", "React", "TypeScript", "PySpark", "Databricks", "IA", "Cloud"]
    },
    {
      position: "Científico de Datos",
      company: "Quind SAS",
      period: "2023 - 2024",
      description: "Desarrollo de pipelines de datos a gran escala y arquitectura lakehouse híbrida integrando servicios cloud.",
      achievements: [
        "Participé en el desarrollo de pipelines de datos utilizando PySpark, Databricks y Delta Lake",
        "Participé en la implementación de arquitectura lakehouse híbrida con AWS y GCP",
        "Contribuí a la optimización significativa en costos de procesamiento y tiempos de consulta",
        "Colaboré con equipos de producto traduciendo requerimientos en soluciones analíticas"
      ],
      technologies: ["PySpark", "Databricks", "Delta Lake", "AWS", "GCP", "BigQuery", "Cloud Storage"]
    },
    {
      position: "Desarrollador Full Stack",
      company: "Quind SAS",
      period: "2022 - 2023",
      description: "Desarrollo de soluciones de software full stack robustas con backend en Python y frontend en React.",
      achievements: [
        "Participé en el desarrollo de aplicaciones web completas con Python y React",
        "Participé en el diseño e implementación de bases de datos relacionales y arquitecturas escalables",
        "Apliqué patrones de diseño y mejores prácticas para garantizar mantenibilidad",
        "Contribuí a la implementación de sistemas con rendimiento óptimo y alta disponibilidad"
      ],
      technologies: ["Python", "React", "TypeScript", "PostgreSQL", "MySQL", "Docker", "Git"]
    }
  ];

  const education = [
    {
      degree: "Maestría en Matemáticas",
      institution: "Universidad de Antioquia",
      period: "2024 - Actualidad",
      description: "Ecuaciones Diferenciales Estocásticas"
    },
    {
      degree: "Matemático",
      institution: "Universidad de Antioquia",
      period: "2018 - 2023",
      description: "Formación rigurosa en matemáticas puras y aplicadas"
    },
    {
      degree: "Profesor de Cátedra",
      institution: "Universidad de Antioquia - Instituto de Matemáticas",
      period: "Agosto 2024 - Actual",
      description: "Docente universitario promoviendo razonamiento lógico y pensamiento crítico"
    }
  ];

  return (
    <div className="page-content">
      <h1 className="page-title">Experiencia</h1>
      
      <div className="experience-section">
        <h2 className="section-subtitle">Experiencia Profesional</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <h3 className="exp-position">{exp.position}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <div className="exp-company">{exp.company}</div>
                <p className="exp-description">{exp.description}</p>
                
                <h4 className="exp-achievements-title">Logros destacados:</h4>
                <ul className="exp-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="exp-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="education-section">
        <h2 className="section-subtitle">Educación y Certificaciones</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="edu-degree">{edu.degree}</h3>
              <div className="edu-institution">{edu.institution}</div>
              <div className="edu-period">{edu.period}</div>
              <p className="edu-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
