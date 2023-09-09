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
          <button className="btn btn-primary" onClick={onAddAnimal}>
            Add Animal
          </button>
          <button className="btn btn-primary" onClick={handleShowFavorites}>
            Favorite Animals
          </button>
          {!hideFavoritesCount && <span className="favorite-count">({favoritesCount})</span>}
        </div>
      )}
      {currentPage === "favorites" && (
        <div className="left-buttons">
          <button className="btn btn-primary" onClick={handleShowAllAnimals}>
            All Animals
          </button>
          {!hideFavoritesCount && <span className="favorite-count">({favoritesCount})</span>}
        </div>
      )}
      {currentPage === "animal" && (
        <div className="left-buttons">
          <button className="btn btn-primary" onClick={handleShowAllAnimals}>
            All Animals
          </button>
          <button className="btn btn-primary" onClick={handleShowFavorites}>
            Favorite Animals
          </button>
          {!hideFavoritesCount && <span className="favorite-count">({favoritesCount})</span>}
        </div>
      )}
      <div className="right-buttons">
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Toolbar;
