import React from "react";
import "../styles/AnimalPage.css";
import { Link } from "react-router-dom";

const AnimalCard = ({
  animal,
  isFavorite,
  onAddToFavorites,
  onRemoveFromFavorites,
  currentPage,
  animalId,
}) => {
  const { name, type, age, image } = animal;

  const handleClickAddToFavorites = (event) => {
    event.preventDefault();
    onAddToFavorites(animal);
  };

  const handleClickRemoveFromFavorites = (event) => {
    event.preventDefault();
    onRemoveFromFavorites(animal);
  };

  return (
    <Link to={`/animal/${animalId}`} className="Link">
      <div className="animal-card">
        <img src={image} alt={`${name}`} />
        <div className="animal-details">
          <h3>{name}</h3>
          <p>Type: {type}</p>
          <p>Age: {age} years</p>
        </div>
        {currentPage === "favorites" ? (
          <button
            onClick={handleClickRemoveFromFavorites}
            className="btn btn-danger"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={handleClickAddToFavorites}
            className="btn btn-primary"
            disabled={isFavorite}
          >
            {isFavorite ? "Already Favorite" : "Add to Favorites"}
          </button>
        )}
      </div>
    </Link>
  );
};

export default AnimalCard;
