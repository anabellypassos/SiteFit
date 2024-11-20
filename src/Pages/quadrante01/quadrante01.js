import React from 'react';
import logo from '../../images/990a7aff-7fd0-4f0d-a789-ce13e7b72efb.png';
import '../quadrante01/quadrante01.css';
import fundocolor from '../../images/Colorful-Holographic-Gradient-Multicolor-Blurred-Background-Design-63936110-1.png';
import celular from '../../images/celular.png';

const Quadrante01 = () => {
    
  return (
    <div className='fundo'>

      <div className='app-bar'>
        <img className='logo' src={logo} alt="Logo" />
        <h1>Viva a vida</h1>
      </div>


<div className='quadrante1'>

  <h1 className='Texto_principal'>
    <div>A vida</div>
     <div>precisa de</div> 
     <div> movimento</div> 
     </h1>

  <p className='pargrafo_quadrante1'>
 <div>Faça do movimento uma parte da sua</div> 
<div> vida diária com exercícios curtos e fáceis</div>
 
  </p>
 <button className='infobutton'>SAIBA MAIS</button>
</div>

<div className='telacelular'>
<img className='fundocolor' src={fundocolor} alt="fundocolor" />
<img className='celular' src={celular} alt='celuler'></img>
</div>
    </div>
  );
}

export default Quadrante01;
