import React from 'react';
import '../styles/AnimalPage.css';

const AnimalCard = ({ animal, onAddToFavorites }) => {
  const { name, type, age, image } = animal;

  return (
    <div className="animal-card">
      <img src={image} alt={`${name}`} />
      <div className="animal-details">
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Age: {age} years</p>
      </div>
      <button onClick={() => onAddToFavorites(animal)} className="btn btn-primary">Add to Favorites</button>
    </div>
  );
};

export default AnimalCard;
