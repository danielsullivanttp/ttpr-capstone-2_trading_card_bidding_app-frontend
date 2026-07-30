import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import TradingCardDetail from "./pages/TradingCardDetail";
import "./App.css";

/*
const cards = [
  {
    name: "David Justice",
    team: "Atlanta Braves",
    status: "Available",
    value: 10,
    rare: false,
  },
  {
    name: "David Justice",
    team: "New York Yankees",
    status: "Available",
    value: 16,
    rare: false,
  },
  {
    name: "David Justice",
    team: "Cleveland Indians",
    status: "Unavailable",
    value: 200,
    rare: true,
  },
  {
    name: "David Justice",
    team: "Oakland Athletics",
    status: "Available",
    value: 39,
    rare: true,
  },
  {
    name: "Ken Griffey Jr.",
    team: "Seattle Mariners",
    status: "Unavailable",
    value: 150,
    rare: true,
  },
  {
    name: "Ken Griffey Jr.",
    team: "Cincinnati Reds",
    status: "Available",
    value: 10,
    rare: false,
  },
  {
    name: "Ken Griffey Jr.",
    team: "Chicago White Sox",
    status: "Available",
    value: 37,
    rare: false,
  },
  {
    name: "Babe Ruth",
    team: "Boston Red Sox",
    status: "Unavailable",
    value: 1000,
    rare: true,
  },
  {
    name: "Babe Ruth",
    team: "New York Ynkees",
    status: "Available",
    value: 10000,
    rare: true,
  },
  {
    name: "Babe Ruth",
    team: "Boston Braves",
    status: "Available",
    value: 10,
    rare: false,
  },
  {
    name: "Sammy Sosa",
    team: "Chicago Cubs",
    status: "Available",
    value: 10,
    rare: true,
  },
  {
    name: "Mark McGuire",
    team: "St. Louis Cardinals",
    status: "Available",
    value: 10,
    rare: true,
  },
];*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TradingCard/:id" element={<TradingCardDetail />} />
      <Route
        path="*"
        element={<h1 style={{ padding: 16 }}>Page Not Found</h1>}
      />
    </Routes>
  );
}

export default App;
