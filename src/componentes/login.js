import React from "react";


function Loginstart() {
  return (
    <div className="box-login">
      
        <h1 className="headtext">Iniciar Sesión</h1>
        <p className="text">Ingresa tus credenciales para acceder a tu cuenta.</p>
      
      <div className="box-inputs">
        <div className="username">
          <label htmlFor="username">Nombre de usuario</label>
          <input className="usernamei" placeholder="Ingresa tu nombre de usuario" />
        </div>
        <div className="password">
          <label htmlFor="password">Contraseña</label>
          <input className="passwordi" type="password" placeholder="Ingresa tu contraseña" />
        </div>
      </div>
      <div className="footer">
          <button className="boton">Iniciar Sesión</button>
      </div>
    </div>
  )
    
}
export default Loginstart