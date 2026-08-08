import { Link } from "react-router";
import "./TradingCard.css";
import EditCurrentCard from "../pages/EditCard";

function TradingCard({ Card, isFavorite, toggleFavorites}) {
const favorited = isFavorite(Card.id);

  function handleFavorite(e) {
    e.preventDefault(); // To prevent the link from navigating
    toggleFavorites(Card);
  }

  
  //  async function editCurrentCard(){
  //   await fetch("http://localhost:3000/TradingCard/:id", {
  //     method = "PATCH",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(updates),
  //   });

  //   setCards(prev => prev.map(card => card.id ? [...card, ...updates] : card));
  
  // }

  // async function deleteCard() {
  //   await fetch("http://localhost:3000/TradingCard/:id", {
  //     method: "DELETE"
  //   })

  //   setcards(prev => prev.filter(card => card.id !== cardId));
  // }

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
        <Link to={`/edit-card/${Card.id}`}>
           <button onClick={(e) => EditCurrentCard(e)} style={{margin: 8}} className="favorite-btn">Edit</button>
        </Link>
         <Link to={`/delete/${Card.id}`}>
           <button onClick={(e) => DeleteCurrentCard(e)}className="favorite-btn">Delete</button>
        </Link>
        <button onClick={(e) => handleFavorite(e)} style={{margin: 8}} className="favorite-btn">
          {favorited ? "❤️ Favorite" : "🤍 Not Favorite"}  
        </button>
        </div>
  );
}

export default TradingCard;
