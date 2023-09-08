import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AnimalPage from "./pages/AnimalPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favoriteAnimals, setFavoriteAnimals] = useState([]);
  const [animalData, setAnimalData] = useState([
    // Initial animal data
    {
      name: "Fluffy",
      type: "Cat",
      age: 3,
      image: "https://example.com/fluffy.jpg",
    },
    {
      name: "Buddy",
      type: "Dog",
      age: 2,
      image: "https://example.com/buddy.jpg",
    },
  ]);

  // Function to update favorite animals
  const updateFavoriteAnimals = (newFavoriteAnimals) => {
    setFavoriteAnimals(newFavoriteAnimals);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage setFavoritesCount={setFavoritesCount} />}
        />
        <Route
          path="/register"
          element={<RegisterPage setFavoritesCount={setFavoritesCount} />}
        />
        <Route
          path="/animals"
          element={
            <AnimalPage
              favoritesCount={favoritesCount}
              favoriteAnimals={favoriteAnimals}
              setFavoritesCount={setFavoritesCount}
              setFavoriteAnimals={updateFavoriteAnimals}
              animalData={animalData} // Pass animal data here
              setAnimalData={setAnimalData} // Pass setAnimalData here
            />
          }
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favoriteAnimals={favoriteAnimals} favoritesCount={favoritesCount} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
