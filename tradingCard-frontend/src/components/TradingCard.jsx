import { Link } from "react-router";

function TradingCard({ Card }) {
  return (
    <Link to={`/TradingCard/${Card.id}`} className="card">
      <div className="trading-card">
        <p>{Card.name}</p>
        <p>{Card.team}</p>
        <p>{Card.status}</p>
        <p>${Card.value}</p>
        {Card.rare && <p>Rare</p>}
      </div>
    </Link>
  );
}

export default TradingCard;
