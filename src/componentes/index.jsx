import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "react-modal"; // Importa Modal de react-modal
import Navbar from "./navegacion/navbar";
import CrearBlog from "../componentes/crearblog";
import Footer from './footer';
import { ListBlog } from "../models";
import "./App.css";
import PaginaBlogs from "./Paginas/PaginaBlogs.jsx";
import BlogModal from "./Paginas/modal";

// Configura el elemento principal de la aplicación para react-modal
Modal.setAppElement("#root");

function App() {
  const [listBlog, setListBlog] = useState(new ListBlog());
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handlePublicarBlog = (nuevoBlog) => {
    const newListBlog = new ListBlog();
    newListBlog.lista = [...listBlog.lista];
    newListBlog.agregar(nuevoBlog);
    setListBlog(newListBlog);
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 50 ? words.slice(0, 50).join(" ") + "..." : description;
  };

  const openModal = (blog) => {
    console.log(blog); // Verifica que los datos del blog están correctos
    setSelectedBlog(blog);
  };

  const closeModal = () => setSelectedBlog(null);

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
            <button className="btn-publicar" onClick={() => openModal(blog)}>Leer más</button>
          </div>
        ))}
      </div>
      {selectedBlog && (
        <BlogModal 
          isOpen={!!selectedBlog} 
          onRequestClose={closeModal} 
          blog={selectedBlog} 
        />
      )}
    </div>
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio blogs={listBlog.lista} />} />
        <Route path="/deportes" element={<PaginaBlogs blogs={listBlog.lista} categoria="Deportes" />} />
        <Route path="/tecnologia" element={<PaginaBlogs blogs={listBlog.lista} categoria="Tecnologia" />} />
        <Route path="/viajes" element={<PaginaBlogs blogs={listBlog.lista} categoria="Viajes" />} />
        <Route path="/educacion" element={<PaginaBlogs blogs={listBlog.lista} categoria="Educacion" />} />
        <Route path="/entretenimiento" element={<PaginaBlogs blogs={listBlog.lista} categoria="Entretenimiento" />} />
        <Route path="/crearblog" element={<CrearBlog onPublicar={handlePublicarBlog} onCancel={() => {}} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
