import React from "react";
import "../Styles/blog.css";


function CrearBlog({ onCancel }) {
  return (
    <div className="box-crearblog">
      <main>
        <div className="Entrada-datos">
          <div className="Encabezado-datos">
            <h1>Crear Blog</h1>
            <p>Rellene el formulario para crear un nuevo blog</p>
          </div>
          <div className="formulario">
            <div className="titulo">
              <label htmlFor="titulo">
                Titulo
                <input type="text" placeholder="Ingrese el titulo del blog " />
              </label>
            </div>
            <div className="categoria">
              <label htmlFor="categoria">
                Categoria
                <select>
                  <option value="Deportes">Deportes</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Viajes">Viajes</option>
                  <option value="Educacion">Educacion</option>
                  <option value="Entretenimiento">Entretenimiento</option>
                </select>
              </label>
            </div>
            <div className="multimedia">
              <label htmlFor="multimedia">
                imagen
                <div className="entradamultimedia">
                  <input type="file" accept="image/*" placeholder="Arrastre su Archivo" />
                </div>
              </label>
            </div>
            <div className="areadetexto">
              <label htmlFor="descripcion">
                descripcion
                <textarea
                  name=""
                  id="descripcion"
                  placeholder="Ingrese la descripcion de su blog"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="pieblog">
            <button className="btn-cancelar" onClick={onCancel}>
              Cancelar
            </button>
            <button className="btn-publicar" onClick={() => { /*  */ }}>
              Publicar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CrearBlog;
