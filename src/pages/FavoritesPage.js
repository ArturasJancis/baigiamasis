import React from "react";
import Toolbar from "../components/Toolbar";
import AnimalCard from "../components/AnimalCard";
import { useNavigate } from "react-router-dom";

const FavoritesPage = ({ favoriteAnimals, favoritesCount, setFavoriteAnimals, setFavoritesCount }) => {
  const navigate = useNavigate();
  const removeFromFavorites = (animalToRemove) => {
    const updatedFavoriteAnimals = favoriteAnimals.filter(
      (animal) => animal.name !== animalToRemove.name
    );
    setFavoriteAnimals(updatedFavoriteAnimals);

    setFavoritesCount(updatedFavoriteAnimals.length);
  };

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <div className="container mt-4">
      <Toolbar
        onShowFavorites={() => {}}
        onLogout={handleLogout}
        currentPage="favorites"
        favoritesCount={favoritesCount}
      />
      <div className="row mt-4">
        {favoriteAnimals.map((animal, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <AnimalCard
              animal={animal}
              isFavorite={true}
              currentPage="favorites"
              onRemoveFromFavorites={() => removeFromFavorites(animal)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
