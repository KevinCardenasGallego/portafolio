import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  summary?: string;
  tags: string[];
  highlights: string[];
  link?: string;
  github?: string;
  client?: string;
  status?: string;
}

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
  const productionProjects: Project[] = [
    {
      title: "Plataforma SaaS de Carga Vehicular Eléctrica",
      description: "Diseñé e implementé end-to-end una plataforma SaaS multi-sede para la operación de cargadores eléctricos en conjuntos residenciales: backend, frontend web, app móvil, integraciones con hardware IoT, pasarela de pagos, billetera digital, schedulers, comunicaciones y despliegue en AWS. Todo el producto, desde la arquitectura hasta producción, fue desarrollado por mí.",
      summary: "Plataforma SaaS multi-sede para la operación de cargadores eléctricos en conjuntos residenciales. Diseñada e implementada end-to-end por mí: backend, frontend web, app móvil, integraciones IoT, pagos y despliegue en AWS.",
      tags: [
        "FastAPI", "SQLAlchemy", "Alembic", "MySQL", "JWT", "2FA",
        "React", "TypeScript", "Vite", "Material UI",
        "React Native", "Expo", "EAS",
        "Docker", "Docker Compose", "Nginx",
        "AWS ECS", "AWS ECR", "AWS Amplify", "GitHub Actions",
        "Wallbox API", "Tuya API", "Wompi", "Gmail API", "WhatsApp Cloud API"
      ],
      highlights: [
        "Arquitectura full stack: backend FastAPI + SQLAlchemy con migraciones Alembic, frontend React/TypeScript (Vite + MUI) y app móvil React Native con Expo/EAS",
        "Modelo de dominio multi-tenant por sede: usuarios, vehículos, cargadores, parqueaderos, tarifas, turnos, reservas, facturación y auditoría",
        "Autenticación segura con JWT + refresh tokens, recuperación de contraseña y 2FA por correo, RBAC granular (superadmin, admin de sede, residente, visitante)",
        "Integración nativa con cargadores Wallbox (control remoto, lectura de estado, locking) y enchufes/medidores Tuya para cargadores no inteligentes",
        "Algoritmo propio de Pico y Carga para distribuir potencia entre vehículos, con generación de PDF del cronograma diario",
        "Sistema de reservas comunitarias con reglas de negocio, sugerencias automáticas, cierres y bloqueo de saldo en tarjeta",
        "Billetera digital con extracto, recargas vía Wompi, auto-recarga configurable y reconciliación idempotente de transacciones",
        "Facturación electrónica, gestión de cobros y modalidad de carga para visitantes con códigos por sede",
        "Comunicaciones omnicanal: correo (Gmail API con plantillas HTML), WhatsApp Cloud API con plantillas Meta y notificaciones push",
        "Sistema de comunicados, promociones, incidencias y dashboard analítico para administradores",
        "Schedulers en background para cobros recurrentes, cierres de reserva, recordatorios y tareas de mantenimiento",
        "Rate limiting, manejo centralizado de configuración por entorno y eliminación de datos conforme a políticas de privacidad",
        "Despliegue automatizado: backend en AWS ECS (con `task-definition`, ECR y migraciones Alembic en CI/CD), frontend en AWS Amplify y app móvil distribuida vía EAS",
        "Mocks de cargadores y suite de tests para desarrollo sin hardware real",
        "Documentación técnica exhaustiva por módulo (integraciones, flujos, roles, schedulers, recuperación 2FA)"
      ],
      client: "Cliente privado",
      status: "En producción"
    },
    {
      title: "CRM para Gestión de Brokers Inmobiliarios",
      description: "Plataforma para la gestión de brokers inmobiliarios que centraliza leads, seguimiento de clientes, embudos de venta y administración de oportunidades, con RBAC granular por roles.",
      tags: ["FastAPI", "SQLAlchemy", "JWT", "React", "TypeScript", "Vite", "MySQL", "Docker", "AWS ECS", "GitHub Actions"],
      highlights: [
        "Despliegue continuo a AWS ECS desde GitHub Actions",
        "Autenticación JWT con sesión y control de roles (superadmin, admin, broker, asesor)",
        "Reportes, auditoría y asignación de leads en tiempo real",
        "Bootstrap de usuarios y datos demo configurable por entorno"
      ],
      client: "Cliente privado",
      status: "En producción"
    },
    {
      title: "Plataforma de Gestión Energética y Pagos",
      description: "API para la gestión de consumo energético en comunidades, con recargas de saldo y pagos integrados a Wompi y Mercado Pago, incluyendo reconciliación de transacciones y webhooks.",
      tags: ["FastAPI", "Python", "MySQL", "Docker", "AWS ECS", "ECR", "GitHub Actions", "Wompi", "Mercado Pago"],
      highlights: [
        "Pipeline CI/CD a AWS ECS con publicación de imágenes en ECR",
        "Integración con pasarelas Wompi y Mercado Pago (checkout, webhooks y reconciliación idempotente)",
        "Manejo multi-entorno (dev / staging / producción) por configuración",
        "Túneles para pruebas de webhooks (Cloudflare / ngrok) en desarrollo"
      ],
      client: "Cliente privado",
      status: "En producción"
    },
    {
      title: "Plataforma Comercial Interna",
      description: "Monorepo con backend FastAPI y frontend React para la operación interna de un negocio: usuarios, scheduler de tareas y dashboards. Despliegue automatizado al hacer merge de Pull Request a main.",
      tags: ["FastAPI", "React", "Vite", "MySQL", "Nginx", "Docker Compose", "GitHub Actions"],
      highlights: [
        "Despliegue por GitHub Actions disparado al merge de PR a main",
        "Frontend servido por Nginx con proxy a la API en la red Docker",
        "Scheduler de tareas en background y documentación segmentada por dominio",
        "Hot reload en desarrollo con volúmenes Docker"
      ],
      client: "Cliente privado",
      status: "En producción"
    },
    {
      title: "Sistema de Inventario y Facturación",
      description: "Plataforma para la administración de productos, clientes, facturas y pagos, con generación de facturas en PDF, dashboards analíticos y autenticación con refresh tokens.",
      tags: ["FastAPI", "SQLAlchemy", "React", "Material UI", "MySQL", "Docker", "ReportLab", "GitHub Actions"],
      highlights: [
        "Workflow de despliegue activado al cierre de PR sobre main",
        "Generación de facturas PDF (ReportLab) desde BD o payload JSON",
        "Seeders integrales para poblar datasets demo del dashboard",
        "Autenticación JWT con access y refresh tokens independientes"
      ],
      client: "Cliente privado",
      status: "En producción"
    }
  ];

  const otherProjects: Project[] = [
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
