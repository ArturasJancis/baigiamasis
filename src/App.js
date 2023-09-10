import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AnimalPage from "./pages/AnimalPage";
import FavoritesPage from "./pages/FavoritesPage";
import SingleAnimalPage from "./pages/SingleAnimalPage";
import { CommentProvider } from "./components/CommentContext";

function App() {
  // State to track favorites
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favoriteAnimals, setFavoriteAnimals] = useState([]);

  // Initial animal data
  const [animalData, setAnimalData] = useState([
    {
      name: "Fluffy",
      type: "Cat",
      age: 3,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IadWjX7Z2rp2w7Td5k-LAwHaFA%26pid%3DApi&f=1&ipt=520c70252e684959ed5e0398330d9ab58c92c678bca2e5f855c818539bbc20b8&ipo=images",
      comments: [],
    },
    {
      name: "Buddy",
      type: "Dog",
      age: 2,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.49CH_m8xcY3b6stGkMkG2AHaEO%26pid%3DApi&f=1&ipt=a9c338652443d4ab455ca3870b36431483b3645d0e7c5ae897a8559e240af67b&ipo=images",
      comments: [],
    },
    {
      name: "Whiskers",
      type: "Cat",
      age: 5,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TQjs2_m_qVd_J_lVAtHADgHaEo%26pid%3DApi&f=1&ipt=02da9aecd510c1b5a8d36ca6047c28cfc1c001574fb0f9aefd71e0da7d99c585&ipo=images",
      comments: [],
    },
    {
      name: "Rex",
      type: "Dog",
      age: 4,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UII6_ipJ_blk2fgFpBr0iwHaFX%26pid%3DApi&f=1&ipt=810f45ac06db7c773d6e80544e2419795efa27586662140031912d4656d97e1e&ipo=images",
      comments: [],
    },
    {
      name: "Oreo",
      type: "Cat",
      age: 2,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xNmHVmGh6h-YMTSalWZIAAHaEK%26pid%3DApi&f=1&ipt=0228111c50f254eb3eb51500b6deed06a3ac99374f6a658d42b5e0cceed1fc47&ipo=images",
      comments: [],
    },
    {
      name: "Lucky",
      type: "Dog",
      age: 3,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HZBBOiQAGW-TJnyedTD9PQHaFj%26pid%3DApi&f=1&ipt=3265f6000a8306e2e7f4673f392e206821e14c198f18955016ade9121deac001&ipo=images",
      comments: [],
    },
    {
      name: "Cleo",
      type: "Cat",
      age: 4,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7Tk5VIU_rFqyZFzBVrwM_AHaFj%26pid%3DApi&f=1&ipt=a6bd560faf738b19b0c9a93dab59508e823089d3b8beddc8dddd5e6ddb0bfa23&ipo=images",
      comments: [],
    },
    {
      name: "Rocky",
      type: "Dog",
      age: 2,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8amkcxCP5S_ElaU0-8cuOAHaE8%26pid%3DApi&f=1&ipt=49c26658b42d94cbb184785e4fc6626b5d52e54ea2285595a24e944c5507b565&ipo=images",
      comments: [],
    },
    {
      name: "Misty",
      type: "Cat",
      age: 3,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Sbtp6DnO5KP7WVNuygzhZwHaFH%26pid%3DApi&f=1&ipt=38089558ed8494553de382456dfbb8a30f756874d482f31397b6aacd95fb8765&ipo=images",
      comments: [],
    },
  ]);

  // Function to update favorite animals
  const updateFavoriteAnimals = (newFavoriteAnimals) => {
    setFavoriteAnimals(newFavoriteAnimals);
  };

  return (
    <Router>
      <CommentProvider>
        <Routes>
          {/* Route for the login page */}
          <Route
            path="/"
            element={<LoginPage setFavoritesCount={setFavoritesCount} />}
          />

          {/* Route for the registration page */}
          <Route
            path="/register"
            element={<RegisterPage setFavoritesCount={setFavoritesCount} />}
          />

          {/* Route for the main animal page */}
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

          {/* Route for the favorites page */}
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

          {/* Route for a single animal page */}
          <Route
            path="/animal/:animalId"
            element={
              <SingleAnimalPage
                animalData={animalData}
                favoritesCount={favoritesCount}
                setFavoritesCount={setFavoritesCount}
                setAnimalData={setAnimalData}
              />
            }
          />
        </Routes>
      </CommentProvider>
    </Router>
  );
}

export default App;
