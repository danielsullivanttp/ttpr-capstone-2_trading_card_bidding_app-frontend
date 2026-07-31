import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./components/FavoritesPage";
import TradingCardDetail from "./pages/TradingCardDetail";
import "./App.css";

function App() {
  const [favorites, setFavoriteCard] = useState([]);

  useEffect(() => {
    async function loadTradingCards() {
      const res = await fetch("http://localhost:3000/TradingCard");
      const data = await res.json();
      setCards(data);
    }
    loadTradingCards();
  }, []);

  function toggleFavoriteCard(card) {
    setFavoriteCard((prev) => {
      const exists = prev.find((c) => c.id === card.id);
      if (exists) return prev.filter((c) => c.id !== card.id);
      return [...prev, card];
    });
  }

  function isFavorite(id) {
    return favorites.some((c) => c.id === id);
  }

  return (
    <>
      <Navbar favoritesCount={favorites.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Home toggleFavorite={toggleFavoriteCard} isFavorite={isFavorite} />
          }
        />
        <Route path="/TradingCard/:id" element={<TradingCardDetail />} />
        <Route
          path="*"
          element={<h1 style={{ padding: 16 }}>Page Not Found</h1>}
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              cards={favorites}
              isFavorite={favorites}
              toggleFavorites={toggleFavoriteCard}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
