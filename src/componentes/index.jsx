import React, { useState } from "react";
import "../Styles/principal.css";
import CrearBlog from "./crearblog";

function PrincipalPage() {
  const [showCrearBlog, setShowCrearBlog] = useState(false);

  return (
    <div className="paginaP">
      <div className="barraN">
        <header>
          <nav>
            <ul>
              <li className="icono1"><a href="#">Inicio</a></li>
              <li className="icono2"><a href="#">Deportes</a></li>
              <li className="icono3"><a href="#">Tecnologia</a></li>
              <li className="icono4"><a href="#">Viajes</a></li>
              <li className="icono5"><a href="#">Educacion</a></li>
              <li className="icono6"><a href="#">Entretenimiento</a></li>
            </ul>
          </nav>
          <li>
            <a href="#" onClick={() => setShowCrearBlog(true)}>Crear Blog</a>
          </li>
        </header>
      </div>
      <div className="contenido">
        <div className="objeto">
          {showCrearBlog && <CrearBlog onCancel={() => setShowCrearBlog(false)} />}
        </div>
      </div>
      <footer>@2024 Derechos reservados</footer>
    </div>
  );
}

export default PrincipalPage;
