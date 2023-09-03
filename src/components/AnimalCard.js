import React from "react";

const AnimalCard = ({ animal, onAddToFavorite, favorites }) => {
  const isFavorite = favorites.includes(animal);

  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} />
      <h2>{animal.name}</h2>
      <p>Type: {animal.type}</p>
      <p>Age: {animal.age} years</p>
      <button onClick={() => onAddToFavorite(animal)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default AnimalCard;
