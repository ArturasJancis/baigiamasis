import React from "react";
import { useNavigate } from "react-router-dom";

const Toolbar = ({ onAddAnimal, onShowFavorites, onLogout, currentPage }) => {
  const navigate = useNavigate();

  const handleShowAllAnimals = () => {
    navigate("/animals");
  };

  const handleShowFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div className="toolbar">
      <div className="left-buttons">
        <button className="btn btn-primary" onClick={onAddAnimal}>
          Add Animal
        </button>
        {currentPage === "favorites" ? (
          <button className="btn btn-primary" onClick={handleShowAllAnimals}>
            All Animals
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleShowFavorites}>
            Favorite Animals
          </button>
        )}
        <span className="favorite-count">(0)</span>
      </div>
      <div className="right-buttons">
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Toolbar;
