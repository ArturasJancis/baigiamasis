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

  // Function to handle adding the animal to favorites
  const handleClickAddToFavorites = (event) => {
    event.preventDefault();
    onAddToFavorites(animal);
  };

  // Function to handle removing the animal from favorites
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
          // Button to remove from favorites if on the favorites page
          <button
            onClick={handleClickRemoveFromFavorites}
            className="btn btn-danger"
          >
            Remove from Favorites
          </button>
        ) : (
          // Button to add to favorites if not on the favorites page
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
