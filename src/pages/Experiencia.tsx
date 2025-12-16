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
      position: "Data Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Presente",
      description: "Desarrollo e implementación de pipelines de datos y soluciones de analytics a escala empresarial.",
      achievements: [
        "Diseñé e implementé un framework de calidad de datos que procesa +10M registros/día",
        "Reduje costos de procesamiento en 40% mediante optimización de queries Spark",
        "Lideré la migración de pipelines legacy a arquitectura moderna de lakehouse"
      ],
      technologies: ["Databricks", "PySpark", "Azure", "SQL", "Python"]
    },
    {
      position: "Fullstack Developer",
      company: "Energy Solutions Co.",
      period: "2020 - 2022",
      description: "Desarrollo de plataforma multi-tenant para gestión de estaciones de carga de vehículos eléctricos.",
      achievements: [
        "Desarrollé backend completo con FastAPI incluyendo sistema de pagos y facturación",
        "Creé interfaz React con MUI para gestión de reservas y monitoreo en tiempo real",
        "Implementé CI/CD automatizado reduciendo tiempo de despliegue en 70%"
      ],
      technologies: ["FastAPI", "React", "PostgreSQL", "Azure Functions", "TypeScript"]
    },
    {
      position: "Software Engineer",
      company: "Analytics Corp",
      period: "2019 - 2020",
      description: "Desarrollo de herramientas de análisis y visualización de datos para clientes empresariales.",
      achievements: [
        "Construí dashboards interactivos con React y D3.js para análisis de métricas",
        "Optimicé APIs REST mejorando tiempos de respuesta en 60%",
        "Automaticé procesos de ETL procesando datos de múltiples fuentes"
      ],
      technologies: ["React", "Python", "REST APIs", "D3.js", "MongoDB"]
    }
  ];

  const education = [
    {
      degree: "Ingeniería en Matemáticas",
      institution: "Universidad de Antioquia",
      period: "2015 - 2020",
      description: "Especialización en matemáticas aplicadas y modelado computacional"
    },
    {
      degree: "Certificación en Cloud Architecture",
      institution: "Microsoft Azure",
      period: "2022",
      description: "Azure Solutions Architect Expert"
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
