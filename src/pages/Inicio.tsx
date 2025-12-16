import React from 'react';
import kevinPhoto from '../assets/kevin.jpg';

export default function Inicio() {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-photo">
          <img src={kevinPhoto} alt="Kevin Cárdenas" />
        </div>
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
          <a 
            href="https://wa.me/573148810204?text=Hola%20Kevin,%20me%20gustaría%20contactarte" 
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Contáctame
          </a>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">3+</div>
          <div className="stat-label">Años de Experiencia</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">6+</div>
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
