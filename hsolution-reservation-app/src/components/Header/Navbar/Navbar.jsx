import {
  faBell,
  faCircleXmark,
  faGear,
  faHouse,
  faListUl,
  faMagnifyingGlass,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.scss";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar ");
  };

  const removeNav = () => {
    setActive("navBar");
  };
  return (
    <nav>
      <section className="navBarSection">
        <div className="navbar">
          <div className="logoDiv">
            <Link to="/">
              <h1 className="logoIcon">Logo</h1>
            </Link>
          </div>

          <div className={active}>
            <div className=" navIcon">
              <ul className="navList flex">
                <li className="navItem">
                  <FontAwesomeIcon
                    className="closeNavBar "
                    onClick={removeNav}
                    icon={faCircleXmark}
                  />
                </li>
                <li className="navItem">
                  <Link className="navLink">
                    <FontAwesomeIcon className="navIcon" icon={faHouse} />
                  </Link>
                </li>
                <li className="navItem">
                  <Link className="navLink">
                    <FontAwesomeIcon className="navIcon" icon={faMessage} />
                  </Link>
                </li>
                <li className="navItem">
                  <Link className="navLink">
                    <FontAwesomeIcon className="navIcon" icon={faGear} />
                  </Link>
                </li>
                <li className="navItem">
                  <Link className="navLink">
                    <FontAwesomeIcon className="navIcon" icon={faBell} />
                  </Link>
                </li>
                <li className="navItem">
                  <Link className="navLink">
                    <FontAwesomeIcon
                      className="navIcon"
                      icon={faMagnifyingGlass}
                    />
                  </Link>
                  <input type="text" name="search" value="" />
                </li>
              </ul>
            </div>
            <ul className="navList flex">
              <li className="navItem status">
                <Link className="navLink" to="/login">
                  Connexion
                </Link>
              </li>
              <li className="navItem status">
                <Link className="navLink" to="/register">
                  Inscription
                </Link>
              </li>
              <li className="navItem status">
                <Link className="navLink" to="/logout">
                  Deconnexion
                </Link>
              </li>
              <li className="navItem"></li>
              <li className="navItem pseudo">
                <span>Magar Andrys </span>
              </li>
            </ul>
          </div>
          <div className="toggleNavbar" onClick={showNav}>
            <FontAwesomeIcon className="navIcon" icon={faListUl} />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
