import {useState, useEffect} from 'react';
import TradingCard from "../src/components/TradingCard"

function Home() {
  const [tradingCards, setTradingCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

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
  }, []);
  
  
  if (loading) return <p style={{ padding: 16 }}>Loading...</p>;
  if (error) return <p style={{ padding: 16 }}>Error: {error}</p>;
console.log(tradingCards, "Lets see")
  return (
    <div>
      <h1 style={{ padding: 16 }}>Popular Trading Cards Binder</h1>
      <div className="grid" >
        {tradingCards.map((card) => {
           console.log(card, "this is the card");
           return (
              <TradingCard key={card.id} Card={card} className="trading-card"/>
          );
        })}
      </div>
    </div>
  );
};

export default Home;