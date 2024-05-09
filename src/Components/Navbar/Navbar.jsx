import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.svg'
import "./Navbar.css";
//import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
//import {Logo} from "../../assets/images/Logo.svg"

function NavBar() {
  const [click, setClick] = useState(false);
``
  const handleClick = () => setClick(!click);
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img className="icon" src={logo} alt=""></img>
            <span>GForce</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Newton's Cradle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Aplicatie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Teorie
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                {/*<HamburgetMenuOpen />{" "}*/}
              </span>
            ) : (
              <span className="icon">
                 {/*<HamburgetMenuClose />*/}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;