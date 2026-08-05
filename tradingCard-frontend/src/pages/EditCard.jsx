import {useState, useEffect} from "react";
import {useParams, useNavigate } from "react-router"; 
import "./EditCard.css";

function EditCurrentCard(){
   const {id} = useParams();
   const navigate = useNavigate();
   
   
   const [form, setForm] = useState({
      name: "",
      team: "",
      status: "",
      value: "",
      rare: false,
    });

  useEffect(() => {
      async function loadCard(){
       try{
        const res = await fetch(`http://localhost:3000/TradingCard/${id}`);
        const data = await res.json();
        setForm(data);        
      }catch(err){
        console.error("Failed to load card", err);
      }
      }
      loadCard();
    }, [id])
   
   function handleChange(e){
    const {name, value, type, checked} = e.target;

    setForm(prev => ({
      ...prev, [name]: type === "checkbox" ? checked : value,
    }))
   }
   
    async function handleSubmit(e){
      e.preventDefault();
      try{
        await fetch(`http://localhost:3000/TradingCard/${id}`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(form),
        });

        navigate("/card");
      }catch(err){
        console.error("Failed to update card", err);
      }
    }
    

    return (
      <form className="edit-card" onSubmit={handleSubmit}>
        <h2>Edit Card</h2>
  <label>
    Name: 
    <input 
      name="name"
      value={form.name}
      onChange={handleChange}
      />
    </label>
    <label>
      Team: 
      <input
      name="team"
      value={form.team}
      onChange={handleChange}
      />
      </label>
      <label>
        Status:
        <input
        name="status"
        value={form.status}
        onChange={handleChange}
        />
      </label>
      <label>
        Value:
        <input
        name="value"
        value={form.value}
      onChange={handleChange}
    />
    </label>
    <label>
      Rare:
      <input
      type="checkbox"
      name="rare"
      checked={form.rare}
      onChange={handleChange}
      />
    </label>

      <button type="submit">Save Changes</button>
      </form>
    )

    // setCards(prev => prev.map(card => card.id ? [...card, ...updates] : card));
  }
  export default EditCurrentCard;