import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TradingCardDetail() {
  let { id } = useParams();

  const [tradingCard, setTradingCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = `http://localhost:3000/TradingCard/${id}`;

    async function loadTradingCard() {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setTradingCard(data);
      setLoading(false);
    }

    loadTradingCard();
  }, [id]);

  if (loading) return <p style={{ padding: 16 }}>Loading...</p>;

  return (
    <form>
      <div style={{ padding: 16 }}>
        {/* <button onClick={() => navigate("/")}>← Back</button> */}
        <h1>{tradingCard.name}</h1>
        <p>{tradingCard.team}</p>
        <p>{tradingCard.status}</p>
        <p>${tradingCard.value}</p>
        <p>{tradingCard.rare}</p>
      </div>
      <div>
        <Link to={`/edit-card/${id}`}>
          <button
            onClick={(e) => EditCurrentCard(e)}
            style={{ margin: 8 }}
            className="favorite-btn"
          >
            Edit
          </button>
        </Link>
        <button
          onClick={(e) => DeleteCurrentcard(e)}
          style={{ margin: 8 }}
          className="favorite-btn"
        >
          Delete
        </button>
      </div>
    </form>
  );
}

export default TradingCardDetail;
