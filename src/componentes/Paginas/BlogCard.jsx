import React from 'react';
import { truncate } from "../funcionesR";

const BlogCard = ({ blog, onOpenModal }) => (
  <div className="blog-card">
    {blog.imagen && <img src={blog.imagen} alt="Blog" />}
    <div className="blog-card-content">
      <h3>{truncate(blog.titulo, 15)}</h3>
      <p>
        Categoría: {blog.categoria} 
        <button className="btn-publicar">editar</button>
        <button className="btn-cancelar">eliminar</button>
      </p>
      <p>{truncate(blog.descripcion, 50)}</p>
      <button className="btn-publicar" onClick={() => onOpenModal(blog)}>Leer más</button>
    </div>
  </div>
);

export default BlogCard;
