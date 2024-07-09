import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../Styles/modal.css';

Modal.setAppElement('#root'); 

const BlogModal = ({ isOpen, onRequestClose, blog, onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  if (!blog) {
    return null;
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    onAddComment(blog.titulo, newComment);
    setNewComment("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Blog Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <button className="close-button" onClick={onRequestClose}>&times;</button>
      </div>
      <div className="modal-body">
        <div className='modal-blog'>
          <h2>{blog.titulo}</h2>
          {blog.imagen && <img src={blog.imagen} alt="Blog" />}
          <p>{blog.descripcion}</p>
        </div>
        <div className="comentario">
          <article>
            <div className='head-comentario'>
              <label htmlFor="comentario">
                Comentario
                <input 
                  type="text" 
                  placeholder='Agrega un comentario' 
                  value={newComment}
                  onChange={handleCommentChange}
                />
              </label>
              <button className="btn-publicar" onClick={handleAddComment}>
                Enviar
              </button>
            </div>
            <div className='body-comentario'>
              {blog.comentarios && blog.comentarios.map((comentario, index) => (
                <p key={index}>{comentario}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </Modal>
  );
};

export default BlogModal;
