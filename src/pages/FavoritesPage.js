import React from "react";
import Toolbar from "../components/Toolbar";
import AnimalCard from "../components/AnimalCard";
import { useNavigate } from "react-router-dom";

const FavoritesPage = ({ favoriteAnimals, setFavoriteAnimals, setFavoritesCount }) => {
  const navigate = useNavigate();

  // Function to remove an animal from favorites
  const removeFromFavorites = (animalToRemove) => {
    // Filter the favorite animals to exclude the one to be removed
    const updatedFavoriteAnimals = favoriteAnimals.filter(
      (animal) => animal.name !== animalToRemove.name
    );
    
    // Update the favorite animals state
    setFavoriteAnimals(updatedFavoriteAnimals);
    
    // Update the favorites count based on the updated list
    setFavoritesCount(updatedFavoriteAnimals.length);
  };

  // Function to handle logout and navigate to the home page
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container mt-4">
      {/* Render the toolbar with logout button */}
      <Toolbar
        onShowFavorites={() => {}}
        onLogout={handleLogout}
        currentPage="favorites"
        hideFavoritesCount={true}
      />
      <div className="row mt-4">
        {/* Map through the favorite animals and render AnimalCard components */}
        {favoriteAnimals.map((animal) => (
          <div key={animal.name} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <AnimalCard
              animal={animal}
              isFavorite={true}
              currentPage="favorites"
              // Pass the removeFromFavorites function as a callback
              onRemoveFromFavorites={() => removeFromFavorites(animal)}
              animalId={animal.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
