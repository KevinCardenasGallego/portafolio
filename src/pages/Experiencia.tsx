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
      position: "Consultor & Desarrollador Freelance Full Stack",
      company: "Independiente",
      period: "Enero 2026 - Actual",
      description: "Trabajo de forma independiente diseñando, desarrollando y operando plataformas a la medida para clientes privados: arquitectura, desarrollo full stack, integraciones con hardware y pasarelas de pago, despliegue en la nube y CI/CD.",
      achievements: [
        "Plataformas en producción para clientes privados con CI/CD en GitHub Actions y despliegue en AWS ECS / Amplify",
        "Diseño end-to-end: backend FastAPI, frontend React/TypeScript, app móvil React Native y bases de datos MySQL",
        "Integraciones con hardware IoT (Wallbox, Tuya) y pasarelas de pago (Wompi, Mercado Pago)",
        "Consultoría en arquitectura, ingeniería de datos y soluciones de IA para optimización de procesos",
        "Gestión directa de la relación con cliente: levantamiento de requerimientos, entrega y operación"
      ],
      technologies: ["FastAPI", "React", "TypeScript", "React Native", "MySQL", "Docker", "AWS ECS", "AWS Amplify", "GitHub Actions", "Python", "IA"]
    },
    {
      position: "Profesor de Cátedra",
      company: "Universidad de Antioquia — Instituto de Matemáticas",
      period: "Agosto 2024 - Actual",
      description: "En paralelo a mi trabajo como consultor, ejerzo como docente universitario en el Instituto de Matemáticas, enfocado en el desarrollo del razonamiento lógico y el pensamiento crítico de los estudiantes.",
      achievements: [
        "Diseño e imparto clases en cursos de matemáticas a nivel de pregrado",
        "Promuevo el razonamiento lógico y el pensamiento crítico",
        "Diseño material didáctico, evaluaciones y acompañamiento académico",
        "Combino la docencia con la práctica profesional como consultor"
      ],
      technologies: ["Docencia", "Matemáticas", "Pensamiento Crítico", "Razonamiento Lógico"]
    },
    {
      position: "Director General & Desarrollador Full Stack",
      company: "Ashtronic",
      period: "2024 - Enero 2026",
      description: "Liderazgo estratégico y desarrollo técnico: dirigí equipos multidisciplinarios, gestioné relaciones con clientes y alianzas, mientras desarrollaba soluciones full stack, ingeniería de datos, pipelines de analítica y soluciones de IA.",
      achievements: [
        "Dirigí la estrategia de la compañía y la gestión de equipos multidisciplinarios",
        "Desarrollé aplicaciones web completas con stack moderno (React, Python, TypeScript)",
        "Construí pipelines de datos y soluciones de ingeniería de datos escalables",
        "Implementé soluciones de IA y automatización para optimización de procesos",
        "Gestioné relaciones con clientes, alianzas estratégicas y portafolio de proyectos"
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
