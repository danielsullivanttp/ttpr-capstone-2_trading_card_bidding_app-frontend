import { Link } from "react-router";

function TradingCard({ Card, toggleFavorite, isFavorite }) {
const favorited = isFavorite(Card.id);

  function handleFavorite(e) {
    e.preventDefault(); // To prevent the link from navigating
    toggleFavorite(Card);
  }

  return (
    <Link to={`/TradingCard/${Card.id}`} className="card">
      <div className="trading-card">
        <p>{Card.name}</p>
        <p>{Card.team}</p>
        <p>{Card.status}</p>
        <p>${Card.value}</p>
        {Card.rare && <p>Rare</p>}
        <button onClick={(e) => handleFavorite(e)} style={{margin: 8}}>
          {favorited ? "❤️ Saved" : "🤍 Save"}  
        </button>
      </div>
    </Link>
  );
}

export default TradingCard;
