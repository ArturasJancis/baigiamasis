import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AnimalPage from "./pages/AnimalPage";
import FavoritesPage from "./pages/FavoritesPage";
import SingleAnimalPage from "./pages/SingleAnimalPage";

function App() {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favoriteAnimals, setFavoriteAnimals] = useState([]);
  const [animalData, setAnimalData] = useState([
    {
      name: "Fluffy",
      type: "Cat",
      age: 3,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IadWjX7Z2rp2w7Td5k-LAwHaFA%26pid%3DApi&f=1&ipt=520c70252e684959ed5e0398330d9ab58c92c678bca2e5f855c818539bbc20b8&ipo=images",
    },
    {
      name: "Buddy",
      type: "Dog",
      age: 2,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.49CH_m8xcY3b6stGkMkG2AHaEO%26pid%3DApi&f=1&ipt=a9c338652443d4ab455ca3870b36431483b3645d0e7c5ae897a8559e240af67b&ipo=images",
    },
  ]);

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
              animalData={animalData}
              setAnimalData={setAnimalData}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favoriteAnimals={favoriteAnimals}
              favoritesCount={favoritesCount}
              setFavoriteAnimals={setFavoriteAnimals}
              setFavoritesCount={setFavoritesCount}
            />
          }
        />
        <Route
          path="/animal/:animalId"
          element={
            <SingleAnimalPage
              animalData={animalData}
              favoritesCount={favoritesCount}
              setFavoritesCount={setFavoritesCount}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
