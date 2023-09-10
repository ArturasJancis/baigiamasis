import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import "../styles/SingleAnimalPage.css";
import { useCommentContext } from "../components/CommentContext";

const SingleAnimalPage = ({ animalData, favoritesCount, setAnimalData }) => {
  const { animalId } = useParams(); // Get the animalId from the route parameters.
  const [newComment, setNewComment] = useState(""); // State for the new comment input.
  const [currentAnimal, setCurrentAnimal] = useState(null); // State to store the current animal.
  const { addComment, deleteComment } = useCommentContext(); // Access comment-related functions from context.
  const navigate = useNavigate(); // Access the navigation function from React Router.

  // useEffect to load the current animal data when the component mounts.
  useEffect(() => {
    if (animalData && animalId) {
      // Find the animal in the animalData array that matches the animalId.
      const foundAnimal = animalData.find((animal) => animal.name === animalId);

      if (!foundAnimal.comments) {
        // Initialize comments if they don't exist.
        foundAnimal.comments = [];
      }

      // Set the currentAnimal state with the found animal data.
      setCurrentAnimal(foundAnimal);
    }
  }, [animalData, animalId, favoritesCount]);

  // Function to add a comment to the current animal.
  const addCommentToCurrentAnimal = (comment) => {
    if (currentAnimal) {
      // Create an updated animal object with the new comment.
      const updatedAnimal = {
        ...currentAnimal,
        comments: [...currentAnimal.comments, comment],
      };
      // Update the animalData array with the updated animal.
      const updatedAnimalData = animalData.map((animal) =>
        animal.name === currentAnimal.name ? updatedAnimal : animal
      );
      setAnimalData(updatedAnimalData); // Update the animal data in the parent component.
    }
  };

  // Function to handle adding a comment.
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      addCommentToCurrentAnimal(newComment); // Add the comment to the current animal.
      addComment(newComment); // Add the comment to the global comment context.
      setNewComment(""); // Clear the input field.
    }
  };

  // Function to handle deleting a comment.
  const handleDeleteComment = (index) => {
    if (currentAnimal) {
      // Create an updated comments array without the deleted comment.
      const updatedComments = [...currentAnimal.comments];
      updatedComments.splice(index, 1);
      // Create an updated animal object with the updated comments.
      const updatedAnimal = { ...currentAnimal, comments: updatedComments };
      // Update the animalData array with the updated animal.
      const updatedAnimalData = animalData.map((animal) =>
        animal.name === currentAnimal.name ? updatedAnimal : animal
      );
      setAnimalData(updatedAnimalData); // Update the animal data in the parent component.
    }
    deleteComment(index); // Delete the comment from the global comment context.
  };

  // Function to handle logging out and navigating back to the homepage.
  const handleLogout = () => {
    navigate("/"); // Navigate to the homepage.
  };

  return (
    <div className="container mt-4">
      <Toolbar
        currentPage="animal"
        favoritesCount={favoritesCount}
        onLogout={handleLogout}
      />
      {currentAnimal && (
        <div className="row mt-4">
          <div className="col-lg-6">
            <img
              src={currentAnimal.image}
              alt={currentAnimal.name}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-lg-6">
            <h2>{currentAnimal.name}</h2>
            <p>{currentAnimal.type}</p>
            <p>{currentAnimal.age} years</p>
          </div>
        </div>
      )}
      {currentAnimal && (
        <div className="comment-section mt-4">
          <ul>
            {currentAnimal.comments.map((comment, index) => (
              <li key={index}>
                {comment}
                <button
                  className="delete-comment-button"
                  onClick={() => handleDeleteComment(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="comment-input">
            <textarea
              className="custom-textarea"
              placeholder="Add a new comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="custom-button" onClick={handleAddComment}>
              Add Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleAnimalPage;
