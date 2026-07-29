function TradingCard({Card}){
    return(
        <div className="trading-card" >
            <p>{Card.name}</p>
            <p>{Card.team}</p>
            <p>{Card.status}</p>
            <p>${Card.value}</p>
            <p>{Card.rare}</p>
        </div>
    )
}

export default TradingCard;