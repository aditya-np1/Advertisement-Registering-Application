import React, { useState } from "react";
import "./navbar.css";
import { FcAdvertising } from "react-icons/fc";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  //code for showing navbar
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //code for closing navbar
  const removeNav = () => {
    setActive("navBar");
  };
// code to add background color to the header

const[transparent,setTransparent] = useState('header')
const addBg = () => {
  if(window.scrollY >= 20){
    setTransparent("header activeHeader");
  }
  else{
    setTransparent('header')
  }
}
window.addEventListener('scroll',addBg)

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <FcAdvertising className="icon" />
              {/* the above FcAdvertising is icon,whiile the H1 text is logo */}
              AdBoard
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contacts
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn loginBtn">
                <a href="#">SignUp</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
