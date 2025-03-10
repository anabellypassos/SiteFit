import React, { Component, useState } from 'react';
import logo from '../../images/imagemcelular/logo.png';
import './appBar.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { render } from '@testing-library/react';

const AppBar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return ( 
 
    <div className='app-bar'>
      < Link to="quadrante01" smooth={true} duration={500}>
        <img className='logo' src={logo} alt="Logo" />
        <h1 className='tituloAppBar' >PowerFit
        </h1>
      </Link>

      {/* Ícone de menu hamburguer para telas pequenas */}
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>

      {/* Menu de navegação */}

      <nav className={menuClass}>
        <Link to="quadrante02" smooth={true} duration={500}>
          <h1 className='menu-item'>
            Sobre nós
          </h1>
        </Link>
        <Link to="quadrante03" smooth={true} duration={500}>
          <h1 className='menu-item'>
            Planos
          </h1>

        </Link>
        <Link to="footer" smooth={true} duration={500}>
          <h1 className='menu-item'>
            Contato
          </h1>

        </Link>

      </nav>
    </div>
  );
};

export default AppBar;
