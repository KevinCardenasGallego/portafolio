import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar el envío del formulario
    const mailtoLink = `mailto:kevin.cardenas1@udea.edu.co?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'kevin.cardenas1@udea.edu.co',
      link: 'mailto:kevin.cardenas1@udea.edu.co'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'Colombia',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Kevin Cárdenas',
      link: 'https://www.linkedin.com/'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: '@kevinc',
      link: 'https://github.com/'
    }
  ];

  return (
    <div className="page-content">
      <h1 className="page-title">Contacto</h1>
      <p className="page-description">
        ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.
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
          <h2 className="section-subtitle">Envía un Mensaje</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
