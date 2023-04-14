import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/website-logo.svg";
import { Primeform } from "../../components/consultation_form/Primeform.js";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [displayform, setDisplayForm] = useState(false);

  const formshow = () => setDisplayForm(true);
  return (
    <>
      <div className={displayform ? "form-page-hide" : "form-page-show"}>
        <Primeform setDisplayForm={setDisplayForm} />
      </div>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink exact to='/' className='nav-logo'>
            <img src={logo} alt='' />
            <span className='nav-logo-name'>
              The<strong>WEB3</strong>Guys
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/about'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/courses'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Courses
              </NavLink>
            </li>
          </ul>
          <button className='nav-ctf' onClick={formshow}>
            Book a free Call
          </button>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
