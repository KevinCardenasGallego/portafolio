import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  link?: string;
  github?: string;
}

export default function Proyectos() {
  const projects: Project[] = [
    {
      title: "ComHub — EV Charging & Energy Management",
      description: "Plataforma multi-tenant para reservas, tarifas, pagos y facturación electrónica.",
      tags: ["FastAPI", "React", "PostgreSQL", "Azure Functions", "CI/CD"],
      highlights: [
        "Backend con modelos transaccionales, wallets y reservas",
        "Integraciones de pagos y e-invoicing",
        "Despliegue por entornos con automatización"
      ],
      github: "https://github.com/"
    },
    {
      title: "Framework de Data Quality para Lakehouse",
      description: "Validaciones de calidad por capa (Bronze/Silver/Gold), con diagnóstico por columna.",
      tags: ["Databricks", "PySpark", "Delta Lake", "Azure", "GitHub Actions"],
      highlights: [
        "Configuración declarativa en YAML",
        "Diagnóstico automatizado y métricas observables",
        "Integración con pipelines de producción"
      ],
      github: "https://github.com/"
    },
    {
      title: "Portal de Clientes — Data Analytics",
      description: "Dashboard interactivo para análisis de métricas de negocio en tiempo real.",
      tags: ["React", "TypeScript", "MUI", "Python", "FastAPI"],
      highlights: [
        "Visualizaciones interactivas con gráficos dinámicos",
        "API RESTful para consultas de datos",
        "Autenticación y autorización OAuth"
      ],
      github: "https://github.com/"
    },
    {
      title: "Automatización de Pipelines ETL",
      description: "Orquestación de flujos de datos con Apache Airflow y Azure Data Factory.",
      tags: ["Airflow", "ADF", "Python", "SQL", "Azure"],
      highlights: [
        "Procesamiento de millones de registros diarios",
        "Monitoreo y alertas automatizadas",
        "Optimización de costos en la nube"
      ]
    }
  ];

  return (
    <div className="page-content">
      <h1 className="page-title">Proyectos</h1>
      <p className="page-description">
        Una selección de proyectos en los que he trabajado, desde aplicaciones 
        fullstack hasta frameworks de datos a escala empresarial.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <ul className="project-highlights">
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            {(project.link || project.github) && (
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    GitHub →
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    Ver más →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
