import React from 'react';

export default function Footer() {
  const contactInfo = {
    email: "kevincardenasg@gmail.com",
    location: "Colombia",
    phone: "+57 3148810204"
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/KevinCardenasGallego", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kevin-cardenas-gallego", icon: "linkedin" },
  ];

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerGrid">
          {/* Información de Contacto */}
          <div className="footerSection">
            <h3 className="footerTitle">Contacto</h3>
            <ul className="footerList">
              <li className="footerItem">
                <span className="footerIcon">📧</span>
                <a href={`mailto:${contactInfo.email}`} className="footerLink">
                  {contactInfo.email}
                </a>
              </li>
              <li className="footerItem">
                <span className="footerIcon">📍</span>
                <span>{contactInfo.location}</span>
              </li>
              <li className="footerItem">
                <span className="footerIcon">📱</span>
                <span>{contactInfo.phone}</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="footerSection">
            <h3 className="footerTitle">Redes Sociales</h3>
            <div className="footerSocial">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footerSocialLink"
                  title={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Sobre el Portafolio */}
          <div className="footerSection">
            <h3 className="footerTitle">Sobre este sitio</h3>
            <p className="footerText">
              Construido con React, TypeScript y Vite.
              Diseñado y desarrollado por Kevin Cárdenas.
            </p>
            <p className="footerCopyright">
              © {new Date().getFullYear()} Kevin Cárdenas. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
