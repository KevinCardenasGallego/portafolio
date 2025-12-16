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
      title: "Arquitectura Lakehouse Híbrida",
      description: "Implementación de arquitectura lakehouse a gran escala integrando AWS y GCP para procesamiento optimizado de datos.",
      tags: ["PySpark", "Databricks", "Delta Lake", "AWS S3", "GCP BigQuery", "Cloud Storage"],
      highlights: [
        "Pipelines de datos procesando millones de registros",
        "Optimización significativa en costos de procesamiento",
        "Reducción de tiempos de consulta mediante arquitectura híbrida",
        "Integración serverless con AWS Lambda"
      ]
    },
    {
      title: "Plataforma Full Stack Empresarial",
      description: "Desarrollo de soluciones web robustas con backend Python y frontend React, aplicando patrones de diseño y arquitecturas escalables.",
      tags: ["Python", "React", "TypeScript", "PostgreSQL", "MySQL", "Docker"],
      highlights: [
        "Arquitectura escalable y mantenible",
        "Bases de datos relacionales optimizadas",
        "Implementación de mejores prácticas de desarrollo",
        "Sistemas de alta disponibilidad y rendimiento"
      ]
    },
    {
      title: "Soluciones de IA y Automatización",
      description: "Liderazgo de proyectos de transformación digital enfocados en inteligencia artificial y automatización de procesos.",
      tags: ["IA", "Machine Learning", "Automatización", "Python", "Cloud"],
      highlights: [
        "Transformación digital y automatización de procesos",
        "Implementación de soluciones de IA empresarial",
        "Generación de eficiencia operativa mediante data-driven decisions",
        "Metodologías ágiles y gestión de equipos multidisciplinarios"
      ]
    },
    {
      title: "Pipelines de Datos en la Nube",
      description: "Desarrollo de pipelines ETL escalables utilizando servicios cloud de GCP y AWS para procesamiento serverless.",
      tags: ["GCP Dataproc", "AWS Lambda", "BigQuery", "Python", "SQL"],
      highlights: [
        "Procesamiento serverless y escalable",
        "Integración de múltiples fuentes de datos",
        "Optimización de costos cloud",
        "Monitoreo y alertas automatizadas"
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
