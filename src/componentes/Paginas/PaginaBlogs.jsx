import React, { useState, useEffect } from "react";
import BlogModal from "./modal";
import { truncate } from "../funcionesR";
function PaginaBlogs({ blogs, categoria }) {
  const [listBlog, setListBlog] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    setListBlog(blogs.filter(blog => blog.categoria === categoria));
  }, [blogs, categoria]);

  

  const openModal = (blog) => {
    console.log("Abriendo modal para:", blog);
    setSelectedBlog(blog);
  };

  const closeModal = () => setSelectedBlog(null);

  return (
    <div>
      <h2>Blogs de {categoria}</h2>
      <div className="blogs-container">
        {listBlog.map((blog, index) => (
          <div key={index} className="blog-card">
            {blog.imagen && <img src={blog.imagen} alt="Blog" />}
            <div className="blog-card-content">
              <h3>{truncate(blog.titulo,15)}</h3>
              <p>Categoría: {blog.categoria} <button className="btn-publicar">editar</button><button className="btn-cancelar">eliminar</button></p>
              <p>{truncate(blog.descripcion,50)}</p>
              <button className="btn-publicar" onClick={() => openModal(blog)}>Leer más</button>
            </div>
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
}

export default PaginaBlogs;
