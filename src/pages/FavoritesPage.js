// FavoritesPage.js

import React from 'react';
import Toolbar from '../components/Toolbar';
import AnimalCard from '../components/AnimalCard';

const FavoritesPage = ({ favoriteAnimals }) => {
  return (
    <div className="container mt-4">
      <Toolbar
        onShowFavorites={() => {}}
        onLogout={() => {}}
        currentPage="favorites" // Pass the current page as "favorites"
      />
      <h2>Favorite Animals</h2>
      <div className="row mt-4">
        {favoriteAnimals.map((animal, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <AnimalCard animal={animal} isFavorite={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
