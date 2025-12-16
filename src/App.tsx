import React, { useMemo } from "react";

type Link = { label: string; href: string };
type Project = {
  title: string;
  tagline: string;
  stack: string[];
  highlights: string[];
  links: Link[];
};

const yearNow = new Date().getFullYear();

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <header className="sectionHeader">
        <h2 className="h2">{title}</h2>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
      </header>
      {children}
    </section>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cx("card", className)}>{children}</div>;
}

function Anchor({ href, children }: { href: string; children: React.ReactNode }) {
  const external = /^https?:\/\//.test(href) || href.startsWith("mailto:");
  return (
    <a className="a" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

export default function App() {
  const profile = useMemo(
    () => ({
      name: "Kevin Cárdenas",
      headline: "Data Engineer · Fullstack Developer · Mathematician",
      location: "Colombia",
      summary:
        "Construyo productos de datos y software de extremo a extremo: pipelines, APIs, frontends y frameworks de calidad. Enfocado en soluciones mantenibles, medibles y listas para producción.",
      links: [
        { label: "GitHub", href: "https://github.com/" },
        { label: "LinkedIn", href: "https://www.linkedin.com/" },
        { label: "Email", href: "mailto:kevin.cardenas1@udea.edu.co" }
      ] as Link[],
      skills: {
        "Data & Analytics": ["Python", "SQL", "Spark", "Databricks", "ADF", "Airflow", "Delta Lake"],
        "Backend": ["FastAPI", "C#", "REST APIs", "Auth/OAuth", "PostgreSQL", "DynamoDB"],
        "Frontend": ["React", "TypeScript", "MUI", "Vite"],
        Cloud: ["AWS (Lambda, API Gateway, S3)", "Azure (Functions, ADLS)"],
        "Quality / QA": ["Data Quality frameworks", "Unit tests", "Observability", "CI/CD"]
      } as Record<string, string[]>
    }),
    []
  );

  const projects = useMemo<Project[]>(
    () => [
      {
        title: "ComHub — EV Charging & Energy Management",
        tagline: "Plataforma multi-tenant para reservas, tarifas, pagos y facturación electrónica.",
        stack: ["FastAPI", "React", "PostgreSQL", "Azure Functions", "CI/CD"],
        highlights: [
          "Backend con modelos transaccionales, wallets y reservas.",
          "Integraciones de pagos y e-invoicing.",
          "Despliegue por entornos con automatización."
        ],
        links: [
          { label: "Caso de estudio", href: "#" },
          { label: "Repo", href: "https://github.com/" }
        ]
      },
      {
        title: "Framework de Data Quality para Lakehouse",
        tagline: "Validaciones de calidad por capa (Bronze/Silver/Gold), con diagnóstico por columna.",
        stack: ["Databricks", "PySpark", "Delta Lake", "Azure", "GitHub Actions"],
        highlights: [
          "Reglas configurables (JSON-driven) y ejecución automatizada.",
          "Resultados trazables (volumetría, completitud, unicidad, consistencia).",
          "Enfoque orientado a gobernanza y auditoría."
        ],
        links: [
          { label: "Documentación", href: "#" },
          { label: "Repo", href: "https://github.com/" }
        ]
      },
      {
        title: "API Serverless en AWS",
        tagline: "API RESTful completa con Lambda + API Gateway + DynamoDB.",
        stack: ["AWS Lambda", "API Gateway", "DynamoDB", "Python"],
        highlights: [
          "Arquitectura serverless con costos controlados.",
          "Endpoints CRUD y claves UUID.",
          "Listo para producción con buenas prácticas."
        ],
        links: [
          { label: "Repo", href: "https://github.com/" }
        ]
      }
    ],
    []
  );

  const nav = useMemo(
    () => [
      { label: "Inicio", href: "#top" },
      { label: "Sobre mí", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Proyectos", href: "#projects" },
      { label: "Contacto", href: "#contact" }
    ],
    []
  );

  return (
    <div id="top" className="page">
      <div className="bgGlow" aria-hidden="true" />

      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="avatar" aria-hidden="true">
              KC
            </div>
            <div>
              <div className="brandName">{profile.name}</div>
              <div className="brandSub muted">{profile.headline}</div>
            </div>
          </div>

          <nav className="nav">
            {nav.map((n) => (
              <a key={n.href} className="navLink" href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container main">
        <section className="hero">
          <div className="heroLeft">
            <h1 className="h1">{profile.headline}</h1>
            <p className="lead">{profile.summary}</p>

            <div className="ctaRow">
              {profile.links.map((l) => (
                <Anchor key={l.label} href={l.href}>
                  <span className="btn">{l.label}</span>
                </Anchor>
              ))}
              <a className="btnGhost" href="#projects">
                Ver proyectos
              </a>
            </div>

            <div className="metaRow">
              <Pill>{profile.location}</Pill>
              <Pill>Disponibilidad: proyectos / consultoría</Pill>
              <Pill>Última actualización: {yearNow}</Pill>
            </div>
          </div>

          <Card className="heroRight">
            <div className="kpiGrid">
              <div className="kpi">
                <div className="kpiLabel muted">Enfoque</div>
                <div className="kpiValue">Data + Software</div>
              </div>
              <div className="kpi">
                <div className="kpiLabel muted">Especialidad</div>
                <div className="kpiValue">Pipelines & APIs</div>
              </div>
              <div className="kpi">
                <div className="kpiLabel muted">Stack</div>
                <div className="kpiValue">Python · C# · React</div>
              </div>
              <div className="kpi">
                <div className="kpiLabel muted">Cloud</div>
                <div className="kpiValue">AWS · Azure</div>
              </div>
            </div>

            <div className="heroNote">
              <div className="muted">Idea de mensaje</div>
              <div className="heroNoteText">
                Diseño soluciones con foco en performance, calidad de datos y despliegues reproducibles.
              </div>
            </div>
          </Card>
        </section>

        <Section id="about" title="Sobre mí" subtitle="Resumen profesional breve y orientado a resultados">
          <Card>
            <p className="p">
              Soy matemático y desarrollador fullstack. Me muevo cómodo entre ingeniería de datos, backend y frontend.
              He trabajado en plataformas con múltiples entornos, integraciones externas y requerimientos fuertes de
              trazabilidad, automatización y calidad.
            </p>
            <div className="split">
              <div>
                <h3 className="h3">Lo que priorizo</h3>
                <ul className="ul">
                  <li>Arquitecturas simples de operar</li>
                  <li>Calidad medible (DQ/QA), logs y diagnósticos</li>
                  <li>CI/CD y despliegues repetibles</li>
                </ul>
              </div>
              <div>
                <h3 className="h3">Lo que construyo</h3>
                <ul className="ul">
                  <li>Lakehouse pipelines (Bronze/Silver/Gold)</li>
                  <li>APIs REST (auth, pagos, facturación)</li>
                  <li>UIs operativas (dashboards, admin tools)</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        <Section id="skills" title="Skills" subtitle="Tecnologías por dominio (editable en 1 lugar)">
          <div className="grid2">
            {Object.entries(profile.skills).map(([group, items]) => (
              <Card key={group}>
                <h3 className="h3">{group}</h3>
                <div className="pillWrap">
                  {items.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Proyectos" subtitle="Selección de trabajos (puedes reemplazar links y texto)">
          <div className="gridProjects">
            {projects.map((p) => (
              <Card key={p.title}>
                <div className="projectTop">
                  <div>
                    <h3 className="h3">{p.title}</h3>
                    <p className="muted">{p.tagline}</p>
                  </div>
                  <div className="pillWrap right">
                    {p.stack.slice(0, 4).map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </div>

                <ul className="ul">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="linksRow">
                  {p.links.map((l) => (
                    <Anchor key={l.label} href={l.href}>
                      {l.label}
                    </Anchor>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contacto" subtitle="Canales rápidos">
          <Card className="contactCard">
            <div className="contactGrid">
              <div>
                <div className="muted">Email</div>
                <div className="contactValue">
                  <Anchor href="mailto:kevin.cardenas1@udea.edu.co">kevin.cardenas1@udea.edu.co</Anchor>
                </div>
              </div>
              <div>
                <div className="muted">GitHub</div>
                <div className="contactValue">
                  <Anchor href="https://github.com/">github.com/</Anchor>
                </div>
              </div>
              <div>
                <div className="muted">LinkedIn</div>
                <div className="contactValue">
                  <Anchor href="https://www.linkedin.com/">linkedin.com/</Anchor>
                </div>
              </div>
            </div>
            <div className="footerNote muted">© {yearNow} {profile.name}. Hecho con React + Vite.</div>
          </Card>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">Build estático, listo para GitHub Pages.</span>
          <a className="toTop" href="#top">Subir ↑</a>
        </div>
      </footer>
    </div>
  );
}
