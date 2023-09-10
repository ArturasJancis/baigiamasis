import React from "react";
import { useNavigate } from "react-router-dom";

const Toolbar = ({
  onAddAnimal,
  onLogout,
  currentPage,
  favoritesCount,
  hideFavoritesCount,
}) => {
  const navigate = useNavigate();

  const handleShowAllAnimals = () => {
    navigate("/animals");
  };

  const handleShowFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div className="toolbar">
      {currentPage === "animals" && (
        <div className="left-buttons">
          {/* Button to add a new animal */}
          <button className="btn btn-primary" onClick={onAddAnimal}>
            Add Animal
          </button>
          {/* Button to navigate to favorite animals */}
          <button className="btn btn-primary" onClick={handleShowFavorites}>
            Favorite Animals
          </button>
          {/* Display favorite count if it's not hidden */}
          {!hideFavoritesCount && (
            <span className="favorite-count">({favoritesCount})</span>
          )}
        </div>
      )}
      {currentPage === "favorites" && (
        <div className="left-buttons">
          {/* Button to navigate back to all animals */}
          <button className="btn btn-primary" onClick={handleShowAllAnimals}>
            All Animals
          </button>
          {/* Display favorite count if it's not hidden */}
          {!hideFavoritesCount && (
            <span className="favorite-count">({favoritesCount})</span>
          )}
        </div>
      )}
      {currentPage === "animal" && (
        <div className="left-buttons">
          {/* Button to navigate back to all animals */}
          <button className="btn btn-primary" onClick={handleShowAllAnimals}>
            All Animals
          </button>
          {/* Button to navigate to favorite animals */}
          <button className="btn btn-primary" onClick={handleShowFavorites}>
            Favorite Animals
          </button>
          {/* Display favorite count if it's not hidden */}
          {!hideFavoritesCount && (
            <span className="favorite-count">({favoritesCount})</span>
          )}
        </div>
      )}
      <div className="right-buttons">
        {/* Button to log out */}
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Toolbar;
