import TradingCard from "./TradingCard";

function Favorites({ cards, isFavorite, toggleFavorites }) {
  return (
    <div className="grid">
      {cards.length === 0 && <p>No Favorite Cards Yet!!!</p>}
      {cards.map((card) => (
        <TradingCard
          key={card.id}
          Card={card}
          isFavorite={isFavorite}
          toggleFavorites={() => toggleFavorites(card.id)}
        />
      ))}
    </div>
  );
}

export default Favorites;