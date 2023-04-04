import { Link, NavLink } from "react-router-dom";
import SearchScreen from "../search/SearchScreen";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/">
        HeroesApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to="/search">
            Search
          </NavLink>
          <div className="navbar-collapse  w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <NavLink className="nav-item nav-link" to="/login">
                Logout
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
