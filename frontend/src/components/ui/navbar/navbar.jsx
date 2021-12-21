import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cartContext } from "../../../store/cartContext";
import NavBaracrtBadge from "../navBarCartBadge/navBarCartBadge";
import "./styles.css";

const NavBar = () => {
  let [click, setClick] = useState(false);
  let classes = "topnav ";
  if (click) classes += "responsive";
  const handleNavToggleClick = () => {
    setClick(!click);
  };

  const [cart] = useContext(cartContext);

  return (
    <div className={classes}>
      <NavLink className="nav-item" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav-item" to="/blog">
        Blog
      </NavLink>
      <NavLink className="nav-item" to="/forum">
        Forum
      </NavLink>
      <NavLink className="nav-item" to="/products">
        Products
      </NavLink>
      <NavLink className="nav-item" to="/favorites">
        Favorites
      </NavLink>
      <Link to="/cart">
        <NavBaracrtBadge number={cart.length} />
      </Link>
      <i
        className="fa fa-bars 
      nav-item icon"
        onClick={handleNavToggleClick}
      ></i>
    </div>
  );
};

export default NavBar;
