import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

//BEM -> Block Element Modifier

const Menu = () => (  // an advantage of react.. 
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT3</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>          
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div class="gpt3__navbar">
      <div class= "gpt3__navbar-links">
          <div class= "gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div class="gpt3__navbar-links_container">
            <Menu />
          </div>
      </div>
      <div class="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign up</button>
      </div>
      <div class="gpt3__navbar-menu">

        {toggleMenu
        ? <RiCloseLine  color ="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line  color ="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div class="gpt3__navbar-menu_container scale-up-center">
            <div class="gpt3__navbar-menu_container-links">
            <Menu />
            <div class="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign up</button>
            </div>
            </div>
          </div>
        )}
    </div>
    </div>
  )
}

export default Navbar