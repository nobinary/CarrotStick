import React from "react";
import {NavLink} from 'react-router-dom'
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/overview">
        <img className='home_logo' src={require('./../media/SVG/home.svg')} alt="home" />
      </NavLink>
      <NavLink to="/habits">
        <img className='habits_logo' src={require('./../media/SVG/list.svg')} alt="habits" />
      </NavLink>
    </div>
  );
};

export default Footer;

{
  /* <div className="fp_logo"></div>
            <p className='define'>Habits define you.</p>
            <p className='pick'>Pick yours.</p>
            <NavLink to="/overview">
            <button className="fp_button">SIGN IN</button>
            </NavLink> */
}
