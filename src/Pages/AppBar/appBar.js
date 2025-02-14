import React, { useState } from 'react';
import logo from '../../images/imagemcelular/logo.png';
import './appBar.css';

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
      <img className='logo' src={logo} alt="Logo" />
      <h1 className='tituloAppBar'>PowerFit
      </h1>

      {/* Ícone de menu hamburguer para telas pequenas */}
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>

      {/* Menu de navegação */}
      
      <nav className={menuClass}>
        <h1 className='menu-item'>Sobre nós</h1>
        <h1 className='menu-item'>Planos</h1>
        <h1 className='menu-item'>Contato</h1>
      </nav>
    </div>
  );
};

export default AppBar;
