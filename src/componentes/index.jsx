import React from "react";
import '../Styles/principal.css'

function PrincipalPage() {
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
        </header>
      </div>
      <div className="contenido">
        <div className="objeto">
          {/* Aquí puedes agregar el contenido principal de la página */}
        </div>
      </div>
    </div>
  );
}

export default PrincipalPage;
