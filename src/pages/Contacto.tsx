import React from 'react';

export default function Contacto() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'kevincardenasg@gmail.com',
      link: 'mailto:kevincardenasg@gmail.com'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'Medellín, Colombia',
      link: null
    },
    {
      icon: '📱',
      title: 'Teléfono',
      value: '+57 3148810204',
      link: 'tel:+573148810204'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+57 3148810204',
      link: 'https://wa.me/573148810204'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'kevin-cardenas-gallego',
      link: 'https://www.linkedin.com/in/kevin-cardenas-gallego'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'KevinCardenasGallego',
      link: 'https://github.com/KevinCardenasGallego'
    }
  ];

  return (
    <div className="page-content">
      <h1 className="page-title">Contacto</h1>
      <p className="page-description">
        ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme a través de cualquiera de estos canales.
      </p>

      <div className="contact-layout">
        <div className="contact-info">
          <h2 className="section-subtitle">Información de Contacto</h2>
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method">
                <div className="contact-icon">{method.icon}</div>
                <div className="contact-details">
                  <div className="contact-label">{method.title}</div>
                  {method.link ? (
                    <a href={method.link} target="_blank" rel="noreferrer" className="contact-value">
                      {method.value}
                    </a>
                  ) : (
                    <div className="contact-value">{method.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="availability">
            <h3 className="availability-title">Disponibilidad</h3>
            <p>
              Actualmente disponible para proyectos freelance y oportunidades de colaboración.
              Tiempo de respuesta típico: 24-48 horas.
            </p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2 className="section-subtitle">Contáctame Directamente</h2>
          
          <div className="direct-contact-buttons">
            <a 
              href="https://wa.me/573148810204?text=Hola%20Kevin,%20me%20gustaría%20contactarte" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              <span className="btn-icon">💬</span>
              Enviar WhatsApp
            </a>
            
            <a 
              href="mailto:kevincardenasg@gmail.com" 
              className="btn btn-email"
            >
              <span className="btn-icon">📧</span>
              Enviar Email
            </a>

            <a 
              href="https://www.linkedin.com/in/kevin-cardenas-gallego" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-linkedin"
            >
              <span className="btn-icon">💼</span>
              Conectar en LinkedIn
            </a>
          </div>

          <div className="contact-note">
            <p>
              Prefiero WhatsApp para respuestas rápidas. Para consultas detalladas, 
              el email funciona mejor. ¡Espero tu mensaje!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
