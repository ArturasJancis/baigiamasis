import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Toolbar from "../components/Toolbar"; 
import { useNavigate } from "react-router-dom";

const SingleAnimalPage = ({ animalData, favoritesCount  }) => {
  const { animalId } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (animalData && animalId) {
      const foundAnimal = animalData.find((animal) => animal.name === animalId);
      setCurrentAnimal(foundAnimal);
    }
    console.log("favoritesCount in SingleAnimalPage:", favoritesCount);
  }, [animalData, animalId]);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newComments = [...comments, newComment];
      setComments(newComments);
      setNewComment("");
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <Toolbar currentPage="animal" favoritesCount={favoritesCount} onLogout={handleLogout} />
      {currentAnimal && (
        <div className="row mt-4">
          <div className="col-lg-6">
            <img src={currentAnimal.image} alt={currentAnimal.name} />
          </div>
          <div className="col-lg-6">
            <h2>{currentAnimal.name}</h2>
            <p>Type: {currentAnimal.type}</p>
            <p>Age: {currentAnimal.age} years</p>
          </div>
        </div>
      )}
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              {comment}
              <button onClick={() => handleDeleteComment(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            placeholder="Add a new comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>
    </div>
  );
};

export default SingleAnimalPage;
