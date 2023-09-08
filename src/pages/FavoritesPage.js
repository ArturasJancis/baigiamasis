import React from "react";
import Toolbar from "../components/Toolbar";
import AnimalCard from "../components/AnimalCard";

const FavoritesPage = ({ favoriteAnimals, favoritesCount, setFavoriteAnimals, setFavoritesCount }) => {

  const removeFromFavorites = (animalToRemove) => {
    const updatedFavoriteAnimals = favoriteAnimals.filter(
      (animal) => animal.name !== animalToRemove.name
    );
    setFavoriteAnimals(updatedFavoriteAnimals);

    // Update favoritesCount
    setFavoritesCount(updatedFavoriteAnimals.length);
  };

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
            <AnimalCard
              animal={animal}
              isFavorite={true}
              currentPage="favorites" // Pass the current page
              onRemoveFromFavorites={() => removeFromFavorites(animal)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
