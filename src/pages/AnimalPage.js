import React, { useState } from "react";
import Toolbar from "../components/Toolbar";
import FilterBar from "../components/FilterBar";
import AnimalCard from "../components/AnimalCard";
import AnimalModal from "../components/AnimalModal";
import "../styles/AnimalPage.css";
import { useNavigate } from "react-router-dom";

const AnimalPage = ({ setFavoritesCount, favoritesCount, favoriteAnimals, setFavoriteAnimals, animalData, setAnimalData }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState(animalData);

  const handleFilterByType = (type) => {
    if (type === "cats") {
      const cats = animalData.filter(
        (animal) => animal.type.toLowerCase() === "cat"
      );
      setFilteredAnimals(cats);
    } else if (type === "dogs") {
      const dogs = animalData.filter(
        (animal) => animal.type.toLowerCase() === "dog"
      );
      setFilteredAnimals(dogs);
    } else {
      setFilteredAnimals(animalData);
    }
  };

  const handleFilterByAge = (age) => {
    if (age === "") {
      setFilteredAnimals(animalData);
    } else {
      const filtered = animalData.filter(
        (animal) => animal.age <= parseInt(age)
      );
      setFilteredAnimals(filtered);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const [showModal, setShowModal] = useState(false);

  const handleAddAnimal = (animal) => {
    const updatedAnimalData = [...animalData, animal];
    setAnimalData(updatedAnimalData); // Update the central animal data
    setFilteredAnimals(updatedAnimalData);
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleAddToFavorites = (animal) => {
    const isAlreadyFavorite = favoriteAnimals.some(
      (favAnimal) => favAnimal.name === animal.name
    );
  
    if (!isAlreadyFavorite) {
      const updatedFavoriteAnimals = [...favoriteAnimals, animal];
      setFavoriteAnimals(updatedFavoriteAnimals); 
  
      setFavoritesCount((prevCount) => prevCount + 1);
    }
  };

  const handleFavoriteCountChange = (newCount) => {
    setFavoritesCount(newCount);
  }

  return (
    <div className="container mt-4">
      <Toolbar
        onLogout={handleLogout}
        onAddAnimal={handleShowModal}
        onFilterByType={handleFilterByType}
        currentPage="animals" 
        favoritesCount={favoritesCount}
      />
      <FilterBar
        onFilterByType={handleFilterByType}
        onFilterByAge={handleFilterByAge}
      />
 <div className="row mt-4">
        {filteredAnimals.map((animal, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <AnimalCard
              animal={animal}
              favorites={favorites}
              isFavorite={favoriteAnimals.some(
                (favAnimal) => favAnimal.name === animal.name
              )}
              setFavorites={setFavorites}
              onAddToFavorites={(animal) => handleAddToFavorites(animal)}
            />
          </div>
        ))}
      </div>
      <AnimalModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onAddAnimal={handleAddAnimal}
      />
    </div>
  );
};

export default AnimalPage;
