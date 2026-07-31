import { Link } from "react-router";

function Navbar({ favoritesCount }) {
  return (
    <nav
      style={{ display: "flex", justifyContent: "space-between", padding: 16 }}
      ><Link to="/"><strong>Traging Card App</strong></Link>
        <></><Link to="/favorites">Favorites</Link><></>
        <span>❤️ {favoritesCount}</span>

    </nav>
  );
}

export default Navbar;
