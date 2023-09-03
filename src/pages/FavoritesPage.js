import React from "react";
import Toolbar from "../components/Toolbar";
import AnimalCard from "../components/AnimalCard";

const FavoritesPage = ({ favorites, onRemoveFavorite, onLogout }) => {
  return (
    <div className="container mt-4">
      <Toolbar onLogout={onLogout} />
      <div className="row mt-4">
        {favorites.map((animal, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <AnimalCard
              animal={animal}
              onAddToFavorite={onRemoveFavorite}
              favorites={favorites}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
