import React from 'react';
import Modal from 'react-modal';
import CommentSection from './CommentSection.jsx';
import '../../Styles/modal.css';

Modal.setAppElement('#root');

const BlogModal = ({ isOpen, onRequestClose, blog, onAddComment }) => {
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
      <div className="modal-header">
        <button className="close-button" onClick={onRequestClose}>&times;</button>
      </div>
      <div className="modal-body">
        <div className='modal-blog'>
          <h2>{blog.titulo}</h2>
          {blog.imagen && <img src={blog.imagen} alt="Blog" />}
          <p>{blog.descripcion}</p>
        </div>
        <CommentSection comments={blog.comentarios} onAddComment={onAddComment} />
      </div>
    </Modal>
  );
};

export default BlogModal;
