import { Link } from "react-router";

function Navbar({ favoritesCount }) {
  return (
    <nav
      style={{ display: "flex", justifyContent: "space-between", padding: 16 }}
      ><Link to="/"><strong>Trading Card App</strong></Link>
        <></>
        <Link to="/favorites">Favorites</Link><></>
        <span>❤️ {favoritesCount}</span>
        <Link to="/create">Add New Card</Link>
    </nav>
  );
}

export default Navbar;
