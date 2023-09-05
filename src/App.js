import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AnimalPage from "./pages/AnimalPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favoriteAnimals, setFavoriteAnimals] = useState([]);

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
