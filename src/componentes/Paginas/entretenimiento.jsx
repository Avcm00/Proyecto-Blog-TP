import React, { useState, useEffect } from "react";
import filtrarCategoria from "../../contenidocategoria";
import BlogModal from "../Paginas/modal";

function PagDeportes({ blogs }) {
  const [listBlog, setListBlog] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null); 

  useEffect(() => {
    setListBlog(filtrarCategoria(blogs, "Entretenimiento"));
  }, [blogs]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 50) {
      return words.slice(0, 50).join(" ") + "...";
    }
    return description;
  };

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div>
      <h2>Blogs de Deporte</h2>
      <div className="blogs-container">
        {listBlog.map((blog, index) => (
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
}

export default PagDeportes;
