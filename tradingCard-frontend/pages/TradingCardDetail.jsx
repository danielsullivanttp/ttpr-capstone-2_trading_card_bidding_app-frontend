import {useParams, useNavigate} from 'react-dom';
import {useState, useEffect} from 'react';

function TradingCardDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [tradingCard, setTradingCard] = useState(nill);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const URL = `http://localhost:3000/TradinCard/${id}`;
        
        async function loadTradingCard(){
            const res = await fetch(URL);
            const data = res.json();
            setTradingCard(data);
            setLoading(false);
        }

        loadTradingCard();
    }, [id]);

    if(loading) return <p style={{padding: 16}}>Loading...</p>

    return (
        <div style={{padding: 16}}>
            <button onClick={() => navigate("/")}>← Back</button>
            <h1>{tradingCard.name}</h1>
            <p>{tradingCard.team}</p>
            <p>{tradingCard.status}</p>
            <p>${tradingCard.value}</p>
            <p>{tradingCard.rare}</p>
        </div>
    );
}

export default TradingCardDetail;