import React from 'react';
import '../Styles/login.css';

function Loginstart() {
  return (
    <div className="box-login">
      <h1 className="headtext">Iniciar Sesión</h1>
      <p className="text">Ingresa tus credenciales para acceder a tu cuenta.</p>
      
      <div className="box-inputs">
        <div className="input-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input className="input-field" id="username" placeholder="Ingresa tu nombre de usuario" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input className="input-field" type="password" id="password" placeholder="Ingresa tu contraseña" />
        </div>
      </div>
      
      <div className="footer">
        <button className="button">Iniciar Sesión</button>
      </div>
      <div>
        <a href="/register">¿No tienes una cuenta? Regístrate</a>
      </div>
    </div>
  );
}

export default Loginstart;
