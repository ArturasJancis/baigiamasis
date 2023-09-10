import React, { createContext, useContext, useState } from 'react';

// Create a context for managing comments
const CommentContext = createContext();

// Custom hook for using the comment context
export const useCommentContext = () => {
  return useContext(CommentContext);
};

// Provider component for managing comments
export const CommentProvider = ({ children }) => {
  // State to store comments
  const [comments, setComments] = useState([]);

  // Function to add a new comment
  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  // Function to delete a comment by index
  const deleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  // Provide the comments and comment manipulation functions to children
  return (
    <CommentContext.Provider value={{ comments, addComment, deleteComment }}>
      {children}
    </CommentContext.Provider>
  );
};
