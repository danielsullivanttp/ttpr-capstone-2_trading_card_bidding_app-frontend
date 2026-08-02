import {useState, useEffect} from "react";
import { useNavigate } from "react-router";

function CreateTradingCard(){
   const navigate = useNavigate();
   const [form, setForm] = useState({
    name: "",
    team: "",
    status: "",
    value: "",
    rare: false}) 

   function handleChange(e){
      const {name, value, type, checked} = e.target;
      setForm(prev => ({...prev, [name]: type === "checkbox" ? checked : value}));     
   }

   async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:3000/TradingCard", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form)
    });
    
    navigate("/"); // Return to home after creating a new card
   }

   return (
    <div className="create-card-page">
        <h1>Create New Trading Card</h1>
        <form onSubmit={handleSubmit} className="create-card-form">
            <input
            name="name" 
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            />
            <input
            name="team" 
            placeholder="Team"
            value={form.team}
            onChange={handleChange}
            />
            <input
            name="status" 
            placeholder="Status"
            value={form.status}
            onChange={handleChange}
            />
            <input
            name="value" 
            placeholder="Value"
            value={form.value}
            onChange={handleChange}
            />
            <label>
            <input
            type="checkbox"
            name="rare" 
            checked={form.rare}
            onChange={handleChange}
            />
            Rare
            </label>
            <button type="submit" className="favorite-btn">Create Card!!!</button>
        </form>
    </div>
   )
}

export default CreateTradingCard;