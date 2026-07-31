function Favorites({ cards, favorites, toggleFavorites }) {
  const favCards = cards.filter((card) => favorites.include(card.id));

  return (
    <div className="grid">
      {favCards.length === 0 && <p>No Favorite Cards Yet!!!</p>}
      {favCards.map((card) => (
        <Tradingcard
          key={card.id}
          Card={card}
          isFavorite={favorites.includes(card.id)}
          toggleFavorites={() => toggleFavorites(card.id)}
        />
      ))}
    </div>
  );
}

export default Favorites;