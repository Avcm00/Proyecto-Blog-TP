import React, { useState } from "react";
import "../Styles/blog.css";

function CrearBlog({ onPublicar, onCancel }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Deportes");
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState("");

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handlePublicar = () => {
    const nuevoBlog = {
      titulo,
      categoria,
      imagen,
      descripcion,
    };

    onPublicar(nuevoBlog);
    onCancel();
  };

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
                Título
                <input
                  type="text"
                  placeholder="Ingrese el título del blog"
                  value={titulo}
                  onChange={handleTituloChange}
                />
              </label>
            </div>
            <div className="categoria">
              <label htmlFor="categoria">
                Categoría
                <select value={categoria} onChange={handleCategoriaChange}>
                  <option value="Deportes">Deportes</option>
                  <option value="Tecnologia">Tecnología</option>
                  <option value="Viajes">Viajes</option>
                  <option value="Educacion">Educación</option>
                  <option value="Entretenimiento">Entretenimiento</option>
                </select>
              </label>
            </div>
            <div className="multimedia">
              <label htmlFor="multimedia">
                Imagen
                <div className="entradamultimedia">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImagenChange}
                  />
                </div>
              </label>
            </div>
            <div className="areadetexto">
              <label htmlFor="descripcion">
                Descripción
                <textarea
                  id="descripcion"
                  placeholder="Ingrese la descripción de su blog"
                  value={descripcion}
                  onChange={handleDescripcionChange}
                ></textarea>
              </label>
            </div>
          </div>
          <div className="pieblog">
            <button className="btn-cancelar" onClick={onCancel}>
              Cancelar
            </button>
            <button className="btn-publicar" onClick={handlePublicar}>
              Publicar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CrearBlog;
