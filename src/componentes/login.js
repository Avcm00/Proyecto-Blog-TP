import React, { useState } from 'react';
import '../Styles/login.css';

function Loginstart({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'usuario' && password === '12345') {
      onLogin();
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="box-login">
      <h1 className="headtext">Iniciar Sesión</h1>
      <p className="text">Ingresa tus credenciales para acceder a tu cuenta.</p>
      
      <div className="box-inputs">
        <div className="input-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input 
            className="input-field" 
            id="username" 
            placeholder="Ingresa tu nombre de usuario" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input 
            className="input-field" 
            type="password" 
            id="password" 
            placeholder="Ingresa tu contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </div>
      
      <div className="footer">
        <button className="button" onClick={handleLogin}>Iniciar Sesión</button>
      </div>
      <div>
        <a href="#">¿No tienes una cuenta? Regístrate</a>
      </div>
    </div>
  );
}

export default Loginstart;
