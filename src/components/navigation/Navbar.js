import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navigationStyles.scss";

const Navbar = () => {
  return (
    <nav className="navbarStyling">
      <div className="navbarEntry">
        <Link to="/">CV Page</Link>
      </div>
      <div className="navbarEntry">
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
