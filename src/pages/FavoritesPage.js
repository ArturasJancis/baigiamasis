import React from 'react';
import Toolbar from '../components/Toolbar';
import AnimalCard from '../components/AnimalCard';

const FavoritesPage = ({ favoriteAnimals, favoritesCount }) => {
  console.log("Received favoriteAnimals:", favoriteAnimals);
  return (
    <div className="container mt-4">
      <Toolbar
        onShowFavorites={() => {}}
        onLogout={() => {}}
        currentPage="favorites" 
        favoritesCount={favoritesCount}
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
