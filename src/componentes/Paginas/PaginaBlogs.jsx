import React, { useState, useEffect } from "react";
import BlogModal from "./modal";

function PaginaBlogs({ blogs, categoria }) {
  const [listBlog, setListBlog] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    setListBlog(blogs.filter(blog => blog.categoria === categoria));
  }, [blogs, categoria]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 50 ? words.slice(0, 50).join(" ") + "..." : description;
  };

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
              <h3>{blog.titulo}</h3>
              <p>{truncateDescription(blog.descripcion)}</p>
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
