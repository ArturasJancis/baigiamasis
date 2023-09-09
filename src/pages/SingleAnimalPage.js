import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import { useNavigate } from "react-router-dom";
import "../styles/SingleAnimalPage.css";
import { useCommentContext } from "../components/CommentContext";

const SingleAnimalPage = ({ animalData, favoritesCount, setAnimalData }) => {
  const { animalId } = useParams();
  const [newComment, setNewComment] = useState("");
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const { comments, addComment, deleteComment } = useCommentContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (animalData && animalId) {
      const foundAnimal = animalData.find((animal) => animal.name === animalId);

      if (!foundAnimal.comments) {
        foundAnimal.comments = [];
      }

      setCurrentAnimal(foundAnimal);
    }
    console.log("favoritesCount in SingleAnimalPage:", favoritesCount);
  }, [animalData, animalId, favoritesCount]);

  const addCommentToCurrentAnimal = (comment) => {
    if (currentAnimal) {
      const updatedAnimal = {
        ...currentAnimal,
        comments: [...currentAnimal.comments, comment],
      };
      const updatedAnimalData = animalData.map((animal) =>
        animal.name === currentAnimal.name ? updatedAnimal : animal
      );
      setAnimalData(updatedAnimalData);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      addCommentToCurrentAnimal(newComment);
      addComment(newComment);
      setNewComment("");
    }
  };

  const handleDeleteComment = (index) => {
    if (currentAnimal) {
      const updatedComments = [
        ...currentAnimal.comments.slice(0, index),
        ...currentAnimal.comments.slice(index + 1),
      ];
      const updatedAnimal = { ...currentAnimal, comments: updatedComments };
      const updatedAnimalData = animalData.map((animal) =>
        animal.name === currentAnimal.name ? updatedAnimal : animal
      );
      setAnimalData(updatedAnimalData);
    }
    deleteComment(index);
  };

  const handleLogout = () => {
    navigate("/");
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
            <p>Type: {currentAnimal.type}</p>
            <p>Age: {currentAnimal.age} years</p>
          </div>
        </div>
      )}
      <div className="comment-section mt-4">
        <h3>Comments</h3>
        <ul>
          {currentAnimal &&
            currentAnimal.comments &&
            currentAnimal.comments.map((comment, index) => (
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
    </div>
  );
};

export default SingleAnimalPage;
