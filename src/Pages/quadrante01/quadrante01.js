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
            <div>Transforme-se <br></br> Hoje
            </div>

          </h1>

          
          <p className='pargrafo_quadrante1'>
            <div>Treinos moderno,estrutura top. Você no seu melhor! </div>


          </p>
          <Link to='/Formulario'>
            <button className='infobutton'>COMECE AGORA</button>
          </Link>
        </div>





      </div>
    </div>

  );
}

export default Quadrante01;
