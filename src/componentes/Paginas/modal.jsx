import React from 'react';
import Modal from 'react-modal';
import '../../Styles/modal.css';

export const BlogModal = ({ isOpen, onRequestClose, blog }) => {
  if (!blog) {
    return null; 
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Blog Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>{blog.titulo}</h2>
      {blog.imagen && <img src={blog.imagen} alt="Blog" />}
      <p>{blog.descripcion}</p>
      <button onClick={onRequestClose}>&times;</button>
    </Modal>
  );
};

export default BlogModal;
