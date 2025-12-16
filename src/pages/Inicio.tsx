import React from 'react';

export default function Inicio() {
  return (
    <div className="page-content">
      <div className="hero-section">
        <h1 className="hero-title">
          Hola, soy <span className="highlight">Kevin Cárdenas</span>
        </h1>
        <p className="hero-subtitle">
          Data Engineer · Fullstack Developer · Mathematician
        </p>
        <p className="hero-description">
          Construyo productos de datos y software de extremo a extremo: pipelines, APIs, 
          frontends y frameworks de calidad. Enfocado en soluciones mantenibles, medibles 
          y listas para producción.
        </p>
        
        <div className="hero-cta">
          <a href="mailto:kevin.cardenas1@udea.edu.co" className="btn btn-primary">
            Contáctame
          </a>
          <a href="#proyectos" className="btn btn-secondary">
            Ver Proyectos
          </a>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">5+</div>
          <div className="stat-label">Años de Experiencia</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">20+</div>
          <div className="stat-label">Proyectos Completados</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">10+</div>
          <div className="stat-label">Tecnologías</div>
        </div>
      </div>
    </div>
  );
}
