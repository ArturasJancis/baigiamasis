import React, { useState } from "react";
import Toolbar from "../components/Toolbar";
import FilterBar from "../components/FilterBar";
import AnimalCard from "../components/AnimalCard";
import "../styles/AnimalPage.css";
import { useNavigate } from "react-router-dom";
import AnimalModal from "../components/AnimalModal";

const AnimalPage = ({ setFavoritesCount, favoritesCount }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [favoriteAnimals, setFavoriteAnimals] = useState([]);

  const [animalData, setAnimalData] = useState([
    {
      name: "Fluffy",
      type: "Cat",
      age: 3,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2F2019%2F11%2Fcat-10-e1573844975155.jpg&f=1&nofb=1&ipt=70351af8650bd5f3db7a850faea2c1225c4195b8b37ceb4e259706765f4c2343&ipo=images",
    },
    {
      name: "Buddy",
      type: "Dog",
      age: 2,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yuYto9g41BDnIt-LwK5N6gHaHx%26pid%3DApi&f=1&ipt=19dfaf74f255d2363c645f75bece5031f1667a6f11e114c1224746bc65a3aee8&ipo=images",
    },
  ]);

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
    setAnimalData(updatedAnimalData);
    setFilteredAnimals(updatedAnimalData);
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleAddToFavorites = (animal) => {
    setFavoriteAnimals((prevFavorites) => {
      console.log("Before adding:", prevFavorites);
      const updatedFavorites = [...prevFavorites, animal];
      console.log("After adding:", updatedFavorites);
      return updatedFavorites;
    });
    setFavoritesCount(prevCount => prevCount + 1);
  };

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
              isFavorite={favoriteAnimals.includes(animal)}
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
