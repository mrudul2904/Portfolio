import React, { useState } from "react";
import { Link } from 'react-scroll';
import './Navbar.css';
import Mrudul from '../../assets/name.png';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={Mrudul} alt="logo" />
      <ul className="nav-menu">
        <li>
          <Link to="home" smooth={true} duration={500} className='anchor-link' onClick={() => setMenu("home")}>
            <p>Home</p>
          </Link>
          {menu === "home" && <img src={underline} alt='' />}
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-50} className='anchor-link' onClick={() => setMenu("about")}>
            <p>About Me</p>
          </Link>
          {menu === "about" && <img src={underline} alt='' />}
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} offset={-50} className='anchor-link' onClick={() => setMenu("services")}>
          <p>Academics</p>
          </Link>
          {menu === "services" && <img src={underline} alt='' />}
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500} offset={-50} className='anchor-link' onClick={() => setMenu("My Work")}>
            <p>My Work</p>
          </Link>
          {menu === "My Work" && <img src={underline} alt='' />}
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50} className='anchor-link' onClick={() => setMenu("contact")}>
            <p>Contact</p>
          </Link>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>
      <div className="nav-connect"><Link to="contact" smooth={true} duration={500} offset={-50} className='anchor-link' onClick={() => setMenu("contact")}>
            <p>Connect With Me</p>
          </Link>
        </div>
    </div>
  );
};

export default Navbar;