import React, { useState, useEffect } from "react";
import BlogModal from "./BlogModal.jsx";
import BlogCard from "./BlogCard.jsx";

function PaginaBlogs({ blogs, categoria }) {
  const [listBlog, setListBlog] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogComments, setBlogComments] = useState({});

  useEffect(() => {
    setListBlog(blogs.filter(blog => blog.categoria === categoria));
  }, [blogs, categoria]);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => setSelectedBlog(null);

  const handleAddComment = (titulo, comentario) => {
    setBlogComments(prevComments => ({
      ...prevComments,
      [titulo]: [...(prevComments[titulo] || []), comentario]
    }));
  };

  return (
    <div>
      <h2>{categoria}</h2>
      <div className="blogs-container">
        {listBlog.map((blog, index) => (
          <BlogCard key={index} blog={blog} onOpenModal={openModal} />
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
}

export default PaginaBlogs;
