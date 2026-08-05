import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./components/FavoritesPage";
import TradingCardDetail from "./pages/TradingCardDetail";
import CreateTradingCard from "./pages/CreateTradingCard";
import "./App.css";
import EditCurrentCard from "./pages/EditCard";

function App() {
  const [cards, setCards] = useState([]);
  const [favorites, setFavoriteCard] = useState([]);

  useEffect(() => {
    async function loadTradingCards() {
      const res = await fetch("http://localhost:3000/TradingCard");
      const data = await res.json();
      setCards(data);
    }

    async function loadFavorites() {
      const res = await fetch("http://localhost:3000/favorites");
      const data = await res.json();
      setFavoriteCard(data.map((f) => f.cardId));
    }
    loadTradingCards();
    loadFavorites();
  }, []);

  async function toggleFavoriteCard(cardId) {
    if (favorites.includes(cardId)) {
      await fetch(`http://localhost:3000/favorites/${cardId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardId }),
      });

      setFavoriteCard((prev) => prev.filter((id) => id !== cardId));
    } else {
      await fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardId }),
      });
      setFavoriteCard((prev) => [...prev, cardId]);
    }
    // const exists = prev.find((c) => c.id === card.id);
    // if (exists) return prev.filter((c) => c.id !== card.id);
  }

  function isFavorite(id) {
    return favorites.includes(id);
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
        <Route path="/edit-card/:id" element={<EditCurrentCard/>}/>
        <Route
          path="*"
          element={<h1 style={{ padding: 16 }}>Page Not Found</h1>}
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              cards={cards.filter((card) => favorites.includes(card.id))}
              isFavorite={isFavorite}
              toggleFavorites={toggleFavoriteCard}
            />
          }
        />
        <Route path="/create" element={<CreateTradingCard />} />
      </Routes>
    </>
  );
}

export default App;
