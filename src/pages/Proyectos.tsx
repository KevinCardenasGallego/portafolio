import React, { useState } from 'react';
import { productionProjects, otherProjects, type Project } from '../data/projects';

const COLLAPSED_HIGHLIGHTS = 4;
const COLLAPSED_TAGS = 8;
const EXPAND_HIGHLIGHTS_THRESHOLD = 6;

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  const isExpandable =
    project.highlights.length > EXPAND_HIGHLIGHTS_THRESHOLD ||
    project.tags.length > COLLAPSED_TAGS ||
    !!project.summary;

  const visibleDescription =
    !expanded && project.summary ? project.summary : project.description;

  const visibleHighlights =
    expanded || !isExpandable
      ? project.highlights
      : project.highlights.slice(0, COLLAPSED_HIGHLIGHTS);

  const visibleTags =
    expanded || !isExpandable
      ? project.tags
      : project.tags.slice(0, COLLAPSED_TAGS);

  const hiddenTagsCount = project.tags.length - visibleTags.length;

  return (
    <div className={`project-card ${expanded ? 'is-expanded' : ''}`}>
      <div className="project-header">
        {(project.status || project.client) && (
          <div className="project-meta">
            {project.status && <span className="project-status">{project.status}</span>}
            {project.client && <span className="project-client">{project.client}</span>}
          </div>
        )}
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{visibleDescription}</p>
      </div>

      <div className="project-tags">
        {visibleTags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
        {!expanded && hiddenTagsCount > 0 && (
          <span className="tag tag-more">+{hiddenTagsCount}</span>
        )}
      </div>

      <ul className="project-highlights">
        {visibleHighlights.map((highlight, i) => (
          <li key={i}>{highlight}</li>
        ))}
      </ul>

      <div className="project-footer">
        {isExpandable && (
          <button
            type="button"
            className="project-toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Ver menos ↑' : 'Ver más ↓'}
          </button>
        )}

        {(project.link || project.github) && (
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                GitHub →
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                Ver sitio →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Proyectos() {
  return (
    <div className="page-content">
      <h1 className="page-title">Proyectos</h1>
      <p className="page-description">
        Una selección de proyectos en los que he trabajado, desde aplicaciones
        fullstack hasta frameworks de datos a escala empresarial.
      </p>

      <section className="projects-section">
        <h2 className="projects-section-title">Proyectos en Producción</h2>
        <p className="projects-section-subtitle">
          Plataformas activas para clientes privados con CI/CD automatizado vía GitHub Actions.
          El código es propiedad de cada cliente, pero su arquitectura y alcance ilustran el tipo
          de soluciones que diseño y opero end-to-end.
        </p>
        <div className="projects-grid">
          {productionProjects.map((p, i) => <ProjectCard key={`prod-${i}`} project={p} />)}
        </div>
      </section>

      <section className="projects-section">
        <h2 className="projects-section-title">Otros Proyectos & Áreas de Trabajo</h2>
        <div className="projects-grid">
          {otherProjects.map((p, i) => <ProjectCard key={`other-${i}`} project={p} />)}
        </div>
      </section>
    </div>
  );
}
