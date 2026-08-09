import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./components/FavoritesPage";
import TradingCardDetail from "./pages/TradingCardDetail";
import CreateTradingCard from "./pages/CreateTradingCard";
import "./App.css";
import EditCurrentCard from "./pages/EditCard";
import DeleteCard from "./pages/DeleteCard";


function App() {
  const [cards, setCards] = useState([]);
  const [favorites, setFavoriteCard] = useState([]);
  const {loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  async function apiFetch(url, options = {}){
    const token = await getAccessTokenSilently();
  
    return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })};  

useEffect(() => {
  if (isAuthenticated && user) {
    apiFetch("http://localhost:3000/users/login", {
      method: "POST",
      body: JSON.stringify({
        id: user.sub,
        name: user.name,
        email: user.email,
        picture: user.picture
      })
    });
  }
}, [isAuthenticated, user]);


  useEffect(() => {
    if(!isAuthenticated) return;

    async function loadTradingCards() {
      const res = await apiFetch("http://localhost:3000/TradingCard");
      const data = await res.json();
      setCards(data);
    }

    async function reloadCards() {
    const res = await apiFetch("http://localhost:3000/TradingCard");
    const data = await res.json();
    setCards(data);
    }


    async function loadFavorites() {
      const res = await apiFetch("http://localhost:3000/favorites");
      const data = await res.json();
      setFavoriteCard(data.map((f) => f.cardId));
    }
    loadTradingCards();
    loadFavorites();
  }, [isAuthenticated]);

  async function toggleFavoriteCard(cardId) {
    if (favorites.includes(cardId)) {
      await apiFetch(`http://localhost:3000/favorites/${cardId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardId }),
      });

      setFavoriteCard((prev) => prev.filter((id) => id !== cardId));
    } else {
      await apiFetch("http://localhost:3000/favorites", {
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
    <div>
      <Navbar favoritesCount={favorites.length} />
      {isAuthenticated ? (
      <Routes>
        <Route
          path="/"
          element={
            <Home toggleFavorite={toggleFavoriteCard} isFavorite={isFavorite} />
          }
          />
        <Route
          path="/TradingCard"
          element={
            <Home toggleFavorite={toggleFavoriteCard} isFavorite={isFavorite} />
          }
          />
        <Route path="/TradingCard/:id" element={<TradingCardDetail />} />
        <Route path="/edit-card/:id" element={<EditCurrentCard/>}/>
          <Route path="/delete/:id" element={<DeleteCard/>}></Route>
          <Route path="/create" element={<CreateTradingCard />} />
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
        <Route
          path="*"
          element={<h1 style={{ padding: 16 }}>Page Not Found</h1>}
          />
      </Routes>
      ) : (
        <h2 style={{ padding: 16 }}>Please log in to view your cards.</h2>
      )}
          </div>
    </>
  );
}

export default App;
