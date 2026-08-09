import { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import TradingCard from "../components/TradingCard";
import EditCurrentCard from "./EditCard";

function Home({ toggleFavorite, isFavorite }) {
  const [tradingCards, setTradingCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const BACKEND_CONNECTION = "http://localhost:3000";
    async function loadTradingCards() {
      try {
        const res = await fetch("http://localhost:3000/TradingCard");
        if (!res.ok) throw new Error("Failed to load Trading Cards!!!");
        const data = await res.json();
        setTradingCards(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadTradingCards();
  }, [location.search]);

  if (loading) return <><p style={{ padding: 16 }}>Loading...</p></>;
  if (error) return <p style={{ padding: 16 }}>Error: {error}</p>;

  return (
    <div>
      <h1 style={{ padding: 16 }}>Popular Trading Cards Binder</h1>
      <div className="grid">
        {tradingCards.map((card) => (
            <TradingCard
              key={card.id}
              Card={card}
              toggleFavorites={() => toggleFavorite(card.id)}
              isFavorite={() => isFavorite(card.id)}
              className="trading-card"
            />
          )
        ) }
      </div>
    </div>
  );
}

export default Home;
