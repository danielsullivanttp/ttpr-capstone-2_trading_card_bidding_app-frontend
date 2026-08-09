import { useAuth0 } from "@auth0/auth0-react";
import { Link, useActionData } from "react-router-dom";

function Navbar({ favoritesCount }) {
  const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

  return (
    <nav
      style={{ display: "flex", justifyContent: "space-between", padding: 16 }}
      ><Link to="/"><strong>Trading Card App</strong></Link>
        {!isAuthenticated && (<button onClick={() => loginWithRedirect()}>Login</button>)}
        {isAuthenticated && (
          <>
          <span>{user.email}</span>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>
            Logout
          </button>
          </>
        )}
        <Link to="/favorites">Favorites</Link><></>
        <span>❤️ {favoritesCount}</span>
        <Link to="/create">Add New Card</Link>
    </nav>
  );
}

export default Navbar;
