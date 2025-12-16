import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Habilidades from "./pages/Habilidades";
import Experiencia from "./pages/Experiencia";
import Contacto from "./pages/Contacto";

export default function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio />;
      case 'sobre-mi':
        return <SobreMi />;
      case 'proyectos':
        return <Proyectos />;
      case 'habilidades':
        return <Habilidades />;
      case 'experiencia':
        return <Experiencia />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="app-container">
      <div className="bgGlow" />
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
        <Footer />
      </main>
    </div>
  );
}
