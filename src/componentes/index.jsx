// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navegacion/navbar"; // Ajusta la ruta según tu estructura de carpetas
import CrearBlog from "../componentes/crearblog"; // Ajusta la ruta según tu estructura de carpetas
import Footer from './footer'; // Ajusta la ruta según tu estructura de carpetas
import { ListBlog } from "../models"; // Ajusta la ruta según tu estructura de carpetas
import "./App.css"; // Asegúrate de incluir los estilos necesarios

function App() {
  const [listBlog, setListBlog] = useState(new ListBlog());

  const handlePublicarBlog = (nuevoBlog) => {
    const newListBlog = new ListBlog();
    newListBlog.lista = [...listBlog.lista];
    newListBlog.agregar(nuevoBlog);
    setListBlog(newListBlog);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio blogs={listBlog.lista} />} />
        <Route path="/viajes" element={<div>Contenido de Viajes</div>} />
        <Route path="/deportes" element={<div>Contenido de Deportes</div>} />
        <Route path="/tecnologia" element={<div>Contenido de Tecnología</div>} />
        <Route path="/educacion" element={<div>Contenido de Educación</div>} />
        <Route path="/entretenimiento" element={<div>Contenido de Entretenimiento</div>} />
        <Route path="/crearblog" element={<CrearBlog onPublicar={handlePublicarBlog} onCancel={() => {}} />} />
      </Routes>
      <div className="defecto"></div>
      <Footer />
    </BrowserRouter>
  );
}

const truncateDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 50) {
    return words.slice(0, 50).join(" ") + "...";
  }
  return description;
};

const Inicio = ({ blogs }) => (
  <div>
    <h2>Últimos Blogs</h2>
    <div className="blogs-container">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card">
          {blog.imagen && <img src={blog.imagen} alt="Blog" />}
          <p>Categoría: {blog.categoria}</p>
          <h3>{blog.titulo}</h3>
          <p>{truncateDescription(blog.descripcion)}</p>
          <button className="btn-publicar">Leer más</button>
        </div>
      ))}
    </div>
  </div>
);

export default App;
