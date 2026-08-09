import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = 'http://localhost:3000'

function DeleteCard() {
const {id} = useParams();
const navigate = useNavigate();

useEffect(() => {
    async function deleteCard(){
        try{
        await fetch(`${API_URL}/TradingCard/${id}`, {
            method: 'DELETE',
        }, navigate("/"));
        
     }catch(err){
        console.log("Error Handling Delete!!!", err);
     }
    }
        deleteCard();
 }, [id, navigate]);

    return (
        <div>
            <h2>Deleting card...</h2>
        </div>        
    )
}

export default DeleteCard;