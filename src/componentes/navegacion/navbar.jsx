import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <div className="barraN">
      <header>
        <nav className="navbar">
          <ul className="barra">
            <li><h6>MI Proyecto BLOG</h6></li>
            <li><Link className="icono1" to="/">Inicio</Link></li>
            <li><Link className="icono1" to="/viajes">Viajes</Link></li>
            <li><Link className="icono1" to="/deportes">Deportes</Link></li>
            <li><Link className="icono1" to="/tecnologia">Tecnología</Link></li>
            <li><Link className="icono1" to="/educacion">Educación</Link></li>
            <li><Link className="icono1" to="/entretenimiento">Entretenimiento</Link></li>
            <li><Link className="icono1" to="/crearblog">Crear Blog</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
