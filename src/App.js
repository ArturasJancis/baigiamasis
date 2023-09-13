import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yuYto9g41BDnIt-LwK5N6gHaHx%26pid%3DApi&f=1&ipt=c6fea9d9aded396002129bc3eae39affa7dea2658a3ff83a789334134588b26e&ipo=images",
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
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RQ33WXLzkx16JW3gBxGhYgHaEK%26pid%3DApi&f=1&ipt=484a2cf2a16a88cb127dd003238980ac71e19c03555eec84d34b206e2b3cdfdb&ipo=images",
      comments: [],
    },
    {
      name: "Oreo",
      type: "Cat",
      age: 2,
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fs03VYi78kJokUkzUbxLbwHaEo%26pid%3DApi&f=1&ipt=bfea5eb31bb2d278c76630f34a72bb5f847ab2bfa4e02d5acfc49ee1caaf1cd8&ipo=images",
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
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._QU1CsK2SriRYOJMpLVwOAHaEK%26pid%3DApi&f=1&ipt=d89bd3d975205da166090ace60ff728d1edc87dd142c61889173f7d2f555f68e&ipo=images",
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
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.S6Xyk_H7Xj0iJMam3Xcy8QHaE8%26pid%3DApi&f=1&ipt=79b3eaf986ff39842cd4152cb7fcc421b47d9eccf8f2a7045e629ff57d4ea328&ipo=images",
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
