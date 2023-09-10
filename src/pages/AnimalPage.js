import React, { useState } from "react";
import Toolbar from "../components/Toolbar";
import FilterBar from "../components/FilterBar";
import AnimalCard from "../components/AnimalCard";
import AnimalModal from "../components/AnimalModal";
import "../styles/AnimalPage.css";
import { useNavigate } from "react-router-dom";

const AnimalPage = ({
  setFavoritesCount,
  favoritesCount,
  favoriteAnimals,
  setFavoriteAnimals,
  animalData,
  setAnimalData,
}) => {
  const navigate = useNavigate();
  const [filteredAnimals, setFilteredAnimals] = useState(animalData);
  const [showModal, setShowModal] = useState(false);

  // Handle filtering by animal type
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

  // Handle filtering by age
  const handleFilterByAge = (age) => {
    const filtered =
      age === ""
        ? animalData
        : animalData.filter((animal) => animal.age <= parseInt(age));
    setFilteredAnimals(filtered);
  };

  // Handle user logout
  const handleLogout = () => {
    navigate("/");
  };

  // Handle adding a new animal to the list
  const handleAddAnimal = (animal) => {
    const updatedAnimalData = [...animalData, animal];
    setAnimalData(updatedAnimalData);
    setFilteredAnimals(updatedAnimalData);
    setShowModal(false);
  };

  // Handle showing the add animal modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Handle adding an animal to favorites
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

  return (
    <div className="container mt-4">
      {/* Toolbar component for navigation and actions */}
      <Toolbar
        onLogout={handleLogout}
        onAddAnimal={handleShowModal}
        onFilterByType={handleFilterByType}
        currentPage="animals"
        favoritesCount={favoritesCount}
      />
      {/* FilterBar component for filtering animals */}
      <FilterBar
        onFilterByType={handleFilterByType}
        onFilterByAge={handleFilterByAge}
      />
      <div className="row mt-4">
        {/* Map and display filtered animals as AnimalCard components */}
        {filteredAnimals.map((animal, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <AnimalCard
              animal={animal}
              isFavorite={favoriteAnimals.some(
                (favAnimal) => favAnimal.name === animal.name
              )}
              onAddToFavorites={(animal) => handleAddToFavorites(animal)}
              animalId={animal.name}
            />
          </div>
        ))}
      </div>
      {/* AnimalModal for adding new animals */}
      <AnimalModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onAddAnimal={handleAddAnimal}
      />
    </div>
  );
};

export default AnimalPage;
