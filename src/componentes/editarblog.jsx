import React, { useState } from 'react';
import { ListBlog, Blog, blogscargados } from './funcionesR';

const EditBlogForm = ({ blog, onSave }) => {
  const [titulo, setTitulo] = useState(blog.titulo);
  const [categoria, setCategoria] = useState(blog.categoria);
  const [imagen, setImagen] = useState(blog.imagen);
  const [descripcion, setDescripcion] = useState(blog.descripcion);

  const handleSave = () => {
    const updatedBlog = new Blog(titulo, categoria, imagen, descripcion);
    onSave(updatedBlog);
  };

  return (
    <div>
      <h2>Editar Blog</h2>
      <form>
        <label>
          Titulo:
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <br />
        <label>
          Categoria:
          <input value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        </label>
        <br />
        <label>
          Imagen:
          <input value={imagen} onChange={(e) => setImagen(e.target.value)} />
        </label>
        <br />
        <label>
          Descripción:
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSave}>Guardar</button>
      </form>
    </div>
  );
};

const BlogApp = () => {
  const [blogs, setBlogs] = useState(blogscargados().lista);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleEditClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleSave = (updatedBlog) => {
    const listBlog = new ListBlog();
    blogs.forEach(blog => listBlog.agregar(blog));
    listBlog.editar(selectedBlog.titulo, updatedBlog);
    setBlogs(listBlog.lista);
    setSelectedBlog(null);
  };

  return (
    <div>
      <h1>Blogs</h1>
      {selectedBlog ? (
        <EditBlogForm blog={selectedBlog} onSave={handleSave} />
      ) : (
        blogs.map(blog => (
          <div key={blog.titulo}>
            <h2>{blog.titulo}</h2>
            <p>{blog.categoria}</p>
            <img src={blog.imagen} alt={blog.titulo} />
            <p>{blog.descripcion}</p>
            <button onClick={() => handleEditClick(blog)}>Editar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogApp;
