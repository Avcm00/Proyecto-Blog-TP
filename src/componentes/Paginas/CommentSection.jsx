import React, { useState } from 'react';

const CommentSection = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    onAddComment(newComment);
    setNewComment("");
  };

  return (
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
          {comments && comments.map((comentario, index) => (
            <p key={index}>{comentario}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default CommentSection;
