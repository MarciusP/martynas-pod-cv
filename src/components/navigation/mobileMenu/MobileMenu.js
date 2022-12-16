import React, { useState } from "react";
import { slide as Menu, slide } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./mobileMenu.scss";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const closeSideBar = () => {
    setIsOpen(false)
  }

  return (
    <div className="mobileMenuWrapper">
      <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        <Link className="menu-item" to="/" onClick={closeSideBar}>
          Home
        </Link>
        <Link className="menu-item" to="/contact" onClick={closeSideBar}>
          Contact
        </Link>
      </Menu>
    </div>
  );
};

export default MobileMenu;
