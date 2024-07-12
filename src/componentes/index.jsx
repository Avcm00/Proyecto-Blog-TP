import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "./navegacion/navbar";
import CrearBlog from "../componentes/crearblog";
import Footer from './footer';
import "./App.css";
import PaginaBlogs from "./Paginas/PaginaBlogs.jsx";
import BlogModal from "./Paginas/BlogModal";
import { truncate, ListBlog, blogscargados } from "./funcionesR.jsx";
import Editarblog from './editarblog'

Modal.setAppElement("#root");

function App() {
  const [listBlog, setListBlog] = useState(blogscargados());
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogComments, setBlogComments] = useState({});

  const handlePublicarBlog = (nuevoBlog) => {
    const newListBlog = new ListBlog();
    newListBlog.lista = [...listBlog.lista];
    newListBlog.agregar(nuevoBlog);
    setListBlog(newListBlog);
  };

  const handleAddComment = (titulo, comentario) => {
    setBlogComments(prevComments => ({
      ...prevComments,
      [titulo]: [...(prevComments[titulo] || []), comentario]
    }));

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
          blog={{
            ...selectedBlog,
            comentarios: blogComments[selectedBlog.titulo] || [],
          }} 
          onAddComment={(comentario) => handleAddComment(selectedBlog.titulo, comentario)} 
        />
      )}
    </div>
  );

  let contenido = () => (
    <div className="contenido">
      <div className="titulo">
        <h1 className="titulo-contenido">Bienvenido a mi Proyecto Blog</h1>
        <br /><br />
        <p className="titulo-descripcion">Puedes comenzar creando blogs o revisando el contenido de otros usuarios</p>
        <button className="btn-publicar">Algo Xd</button>
      </div>
      <img className='imagen-contenido' src="https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_1280.jpg" alt="" />
    </div>
  );

  return (
    <BrowserRouter>
      <Navbar />
      <div className="pagina-contenido"></div>
      <Routes>
        <Route path="/" element={<Inicio blogs={listBlog.lista} />} />
        <Route path="/deportes" element={<PaginaBlogs blogs={listBlog.lista} categoria="Deportes" />} />
        <Route path="/tecnologia" element={<PaginaBlogs blogs={listBlog.lista} categoria="Tecnologia" />} />
        <Route path="/viajes" element={<PaginaBlogs blogs={listBlog.lista} categoria="Viajes" />} />
        <Route path="/educacion" element={<PaginaBlogs blogs={listBlog.lista} categoria="Educacion" />} />
        <Route path="/entretenimiento" element={<PaginaBlogs blogs={listBlog.lista} categoria="Entretenimiento" />} />
        <Route path="/crearblog" element={<CrearBlog onPublicar={handlePublicarBlog} onCancel={() => {<Inicio/>}} />} />
        <Route path="/editarblog" element={<Editarblog onPublicar={handlePublicarBlog} onCancel={() => {}} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
