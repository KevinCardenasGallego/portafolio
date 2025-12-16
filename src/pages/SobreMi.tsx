import React from 'react';

export default function SobreMi() {
  return (
    <div className="page-content">
      <h1 className="page-title">Sobre Mí</h1>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            Soy un profesional apasionado por la tecnología, los datos y las matemáticas, 
            con experiencia en el desarrollo de soluciones de software y análisis de datos 
            de alto impacto.
          </p>
          
          <h2 className="section-subtitle">Mi Trayectoria</h2>
          <p>
            Con formación en matemáticas y una sólida experiencia en ingeniería de datos 
            y desarrollo fullstack, he trabajado en proyectos que van desde plataformas 
            de gestión de energía hasta frameworks de calidad de datos a escala empresarial.
          </p>
          
          <h2 className="section-subtitle">Filosofía de Trabajo</h2>
          <p>
            Creo en el código limpio, las soluciones escalables y el aprendizaje continuo. 
            Mi enfoque combina la rigurosidad matemática con las mejores prácticas de 
            ingeniería de software para crear sistemas robustos y eficientes.
          </p>

          <h2 className="section-subtitle">Intereses</h2>
          <ul className="interests-list">
            <li>🔬 Machine Learning y Data Science</li>
            <li>🏗️ Arquitectura de Software</li>
            <li>📊 Visualización de Datos</li>
            <li>🧮 Matemáticas Aplicadas</li>
            <li>🚀 Tecnologías Cloud</li>
          </ul>
        </div>

        <div className="about-image">
          <div className="profile-card">
            <div className="profile-avatar">KC</div>
            <h3>Kevin Cárdenas</h3>
            <p className="profile-role">Data Engineer & Developer</p>
            <p className="profile-location">📍 Colombia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
