import React, {useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLin, RiCloseLine} from 'react-icons/ri'
import atlassian from '../../assets/atlassian.png'
//Bem > Block Element Modifier

const Menu = () => (
  <>
  <p><a href="#home">Home </a></p>
  <p><a href="#wgpt3">What is GPT3 </a></p>
  <p><a href="#possibility">open AI </a></p>
  <p><a href="#features">Case Studies </a></p>
  <p><a href="#blog">Library </a></p>
</>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src= {atlassian} alt="atçasoam"/>

        </div>

        <div className="gpt3__navbar-links_container">
        <Menu/>
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sig in</p>
        <button type="button">Sign up</button>
        </div>
        
<div className="gpt3__navbar-menu">
    {toggleMenu 
    ? <RiCloseLine color='fff' size={27} onClick={() => setToggleMenu(false)} />
    : <RiMenu3Line color='fff' size={27} onClick={() => setToggleMenu(true)} />
   
    }
    {toggleMenu && (
      <div className="gpt3__navbar-menu_container scale-up-center">
        <div className="gpt3__navbar-menu_container-links">
      <Menu/>
      <div className="gpt3__navbar-menu_container-links-sign">
        <p>Sig in</p>
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