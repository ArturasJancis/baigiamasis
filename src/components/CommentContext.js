import React, { createContext, useContext, useState } from 'react';

const CommentContext = createContext();

export const useCommentContext = () => {
  return useContext(CommentContext);
};

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const deleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <CommentContext.Provider value={{ comments, addComment, deleteComment }}>
      {children}
    </CommentContext.Provider>
  );
};
