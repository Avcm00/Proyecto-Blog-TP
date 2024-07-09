import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "react-modal"; 
import Navbar from "./navegacion/navbar";
import CrearBlog from "../componentes/crearblog";
import Footer from './footer';
import "./App.css";
import PaginaBlogs from "./Paginas/PaginaBlogs.jsx";
import BlogModal from "./Paginas/modal";
import { truncate , ListBlog } from "./funcionesR.jsx";

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

  const handleAddComment = (titulo, comentario) => {
    const updatedListBlog = listBlog.lista.map(blog => {
      if (blog.titulo === titulo) {
        if (!blog.comentarios) {
          blog.comentarios = [];
        }
        blog.comentarios.push(comentario);
      }
      return blog;
    });
    setListBlog({ ...listBlog, lista: updatedListBlog });
    setSelectedBlog(prev => ({ ...prev, comentarios: [...(prev?.comentarios || []), comentario] }));
  };

  const openModal = (blog) => {
    console.log(blog); 
    setSelectedBlog(blog);
  };

  const closeModal = () => setSelectedBlog(null);

  const Inicio = ({ blogs }) => (
    <div>
      {contenido()}
      <h2>Últimos Blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            {blog.imagen && <img src={blog.imagen} alt="Blog" />}
            <p>Categoría: {blog.categoria} <button className="btn-publicar">editar</button><button className="btn-cancelar">eliminar</button></p>
            <h3>{truncate(blog.titulo, 20)}</h3>
            <p>{truncate(blog.descripcion, 50)}</p>
            <button className="btn-publicar" onClick={() => openModal(blog)}>Leer más</button>
          </div>
        ))}
      </div>
      {selectedBlog && (
        <BlogModal 
          isOpen={!!selectedBlog} 
          onRequestClose={closeModal} 
          blog={selectedBlog} 
          onAddComment={handleAddComment} 
        />
      )}
    </div>
  );

  let contenido = () => (
    <div className="contenido">
      <h1>Bienvenido a mi Proyecto Blog</h1>
      <p>Puedes comenzar creando blogs o revisando el contenido de otros usuarios</p>
      <img src="https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_1280.jpg" alt="" />
    </div>
  );

  return (
    <BrowserRouter>
      <Navbar />
      <div className="pagina-contenido">
        
      </div>
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
