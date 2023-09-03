import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AnimalPage from "./pages/AnimalPage"; 
import FavoritesPage from "./pages/FavoritesPage"; 

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleRemoveFavorite = (animalToRemove) => {
    const updatedFavorites = favorites.filter((animal) => animal !== animalToRemove);
    setFavorites(updatedFavorites);
  };
  
  const handleLogout = () => {
    setLoggedIn(false); 
    navigate("/");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/animals"
          element={<AnimalPage loggedIn={loggedIn} />}
        />
        <Route
          path="/favorites"
          element={
            loggedIn ? (
              <FavoritesPage
                favorites={favorites} 
                onRemoveFavorite={handleRemoveFavorite} 
                onLogout={handleLogout} 
              />
            ) : (
              <LoginPage />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
