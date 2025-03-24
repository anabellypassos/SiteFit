import React, { useState, useEffect } from 'react';
import '../quadrante01/quadrante01.css';
import banner from './imageq1/crossfit-534615_1280.jpg';
import { Link } from 'react-router-dom';

const Quadrante01 = () => {



  return (
    <div className='containerQuadrante01'>


      <div className='fundo'>



        <div className='quadrante1'>

          <h1 className='Texto1'>
            <div>Intensifique o seu
            </div>

          </h1>

          <p class="Texto2">
            <span class="treino">Treino</span> conosco!
          </p>
          <p className='pargrafo_quadrante1'>
            <div>Faça do movimento parte do seu dia </div>


          </p>
          <Link to='/Formulario'>
            <button className='infobutton'>CADASTRE-SE</button>
          </Link>
        </div>





      </div>
    </div>

  );
}

export default Quadrante01;
