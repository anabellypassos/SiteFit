import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import logo from '../../images/imagemcelular/logo.png';
import './appBar.css';

const AppBar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const updateMenu = () => {
    setBurgerClass(isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked");
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
    setIsMenuClicked(!isMenuClicked);
  };

  // Função para navegar e rolar para uma seção
  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      setTimeout(() => {
        scroll.scrollTo(document.getElementById(section)?.offsetTop || 0, {
          duration: 500,
          smooth: true,
        });
      }, 100);
    }
  };

  // Quando a home carregar, verifica se precisa rolar para uma seção específica
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scroll.scrollTo(document.getElementById(location.state.scrollTo)?.offsetTop || 0, {
          duration: 500,
          smooth: true,
        });
      }, 100);
    }
  }, [location]);

  return (
    <div className='app-bar'>
      <ScrollLink to="quadrante01" smooth={true} duration={500}>
        <img className='logo' src={logo} alt="Logo" />
        <h1 className='tituloAppBar'>PowerFit</h1>
      </ScrollLink>

      <div className="burger-menu" onClick={updateMenu}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>

      <nav className={menuClass}>
        <Link to='/'>
          <h1 className='menu-item'>Início</h1>
        </Link>

        <h1 className='menu-item' onClick={() => handleNavigation("quadrante02")}>
          Sobre nós
        </h1>
        <h1 className='menu-item' onClick={() => handleNavigation("quadrante03")}>
          Planos
        </h1>
        <h1 className='menu-item' onClick={() => handleNavigation("footer")}>
          Contato
        </h1>
      </nav>
    </div>
  );
};

export default AppBar;
