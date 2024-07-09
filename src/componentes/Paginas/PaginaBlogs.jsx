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

  const handleAddComment = (comment) => {
    const blogTitle = selectedBlog.titulo;
    setBlogComments((prevComments) => ({
      ...prevComments,
      [blogTitle]: [...(prevComments[blogTitle] || []), comment],
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
          onAddComment={handleAddComment} 
        />
      )}
    </div>
  );
}

export default PaginaBlogs;
