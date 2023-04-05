import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary ">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          {routes.map(({ to, text }) => {
            return (
              <NavLink key={text} className="nav-item nav-link " to={to}>
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
const routes = [];

routes.push({
  to: "/",
  text: "HeroesApp",
});
routes.push({
  to: "/dc",
  text: "DC",
});
routes.push({
  to: "/marvel",
  text: "Marvel",
});
routes.push({
  to: "/search",
  text: "Search",
});
routes.push({
  to: "/login",
  text: "Logout",
});

export default Navbar;
