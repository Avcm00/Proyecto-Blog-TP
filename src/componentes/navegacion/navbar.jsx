import React, { useState } from "react";
import { Link } from "react-router-dom";
import CrearBlog from "../crearblog";
import './navbar.css';

function Navbar() {
  const [showCrearBlog, setShowCrearBlog] = useState(false);

  const handleCrearBlogClick = () => {
    setShowCrearBlog(true);
  };

  const handleCancel = () => {
    setShowCrearBlog(false);
  };

  return (
    <div className="barraN">
      <header>
        <nav className="navbar">
          <ul className="barra">
            <li><h6>MI Proyecto BLOG</h6></li>
            <li><Link className="icono1" to="/" onClick={handleCancel}>Inicio</Link></li>
            <li><Link className="icono1" to="/viajes" onClick={handleCancel}>Viajes</Link></li>
            <li><Link className="icono1" to="/deportes" onClick={handleCancel}>Deportes</Link></li>
            <li><Link className="icono1" to="/tecnologia" onClick={handleCancel}>Tecnología</Link></li>
            <li><Link className="icono1" to="/educacion" onClick={handleCancel}>Educación</Link></li>
            <li><Link className="icono1" to="/entretenimiento" onClick={handleCancel}>Entretenimiento</Link></li>
            <li><button onClick={handleCrearBlogClick}>Crear Blog</button></li>
          </ul>
        </nav>
      </header>
      <div className="contenido">
        {showCrearBlog && <CrearBlog onCancel={handleCancel} />}
      </div>
    </div>
  );
}

export default Navbar;
