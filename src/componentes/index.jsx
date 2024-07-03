import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navegacion/navbar";  // Ajusta la ruta según tu estructura de carpetas
import CrearBlog from "../componentes/crearblog";  // Ajusta la ruta según tu estructura de carpetas
import Footer from './footer'; // Ajusta la ruta según tu estructura de carpetas

function App() {
  const [blogs, setBlogs] = useState([]);

  const handlePublicarBlog = (nuevoBlog) => {
    setBlogs([...blogs, nuevoBlog]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio blogs={blogs} />} />
        <Route path="/viajes" element={<div>Contenido de Viajes</div>} />
        <Route path="/deportes" element={<div>Contenido de Deportes</div>} />
        <Route path="/tecnologia" element={<div>Contenido de Tecnología</div>} />
        <Route path="/educacion" element={<div>Contenido de Educación</div>} />
        <Route path="/entretenimiento" element={<div>Contenido de Entretenimiento</div>} />
        <Route path="/crearblog" element={<CrearBlog onPublicar={handlePublicarBlog} onCancel={() => {}} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const Inicio = ({ blogs }) => (
  <div>
    <h2>Últimos Blogs</h2>
    <ul>
      {blogs.map((blog, index) => (
        <li key={index}>
          <h3>{blog.titulo}</h3>
          <p>{blog.descripcion}</p>
          <p>Categoría: {blog.categoria}</p>
          {/* Aquí podrías mostrar la imagen si la manejas como URL */}
        </li>
      ))}
    </ul>
  </div>
);

export default App;
