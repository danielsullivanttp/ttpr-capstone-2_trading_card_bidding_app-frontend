import { useState } from 'react'
import './App.css'
import './components/TradingCard'
import TradingCard from './components/TradingCard'

const card = {
  name: "David Justice",
  team: "Atlanta Baves",
  status: "Available",
  value: 10,
  rare: false
}

function App() {

  return (
    <div>
  <TradingCard Card={card}/>
 </div>
  )
}
export default App;
