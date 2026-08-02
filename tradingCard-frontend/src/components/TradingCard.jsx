import { Link } from "react-router";
import "./TradingCard.css";

function TradingCard({ Card, isFavorite, toggleFavorites }) {
const favorited = isFavorite(Card.id);

  function handleFavorite(e) {
    e.preventDefault(); // To prevent the link from navigating
    toggleFavorites(Card);
  }

  return (
    <div>
    <Link to={`/TradingCard/${Card.id}`} className="card">
      <div className="trading-card">
        <p>{Card.name}</p>
        <p>{Card.team}</p>
        <p>{Card.status}</p>
        <p>${Card.value}</p>
        {Card.rare && <p>Rare</p>}
      </div>
    </Link>
        <button onClick={(e) => handleFavorite(e)} style={{margin: 8}} className="favorite-btn">
          {favorited ? "❤️ Favorite" : "🤍 Not Favorite"}  
        </button>
        </div>
  );
}

export default TradingCard;
