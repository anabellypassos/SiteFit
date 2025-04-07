import React from 'react'
import '../quadrante3/quadrante3.css';
import homemPeso from '../quadrante3/imagensquadrante3/homemcoPeso.png';
import bicicleta from '../quadrante3/imagensquadrante3/bicicleta.png';
import esteira from '../quadrante3/imagensquadrante3/esteira.png';
import { Link } from 'react-router-dom';
import planoseprecos from '../../Pagesroutes/PlanosEPrecos/planoseprecos';

const Quadrante3 = () => {
  return (
    <div className='container'>

      <h1 className='titlePrincipaisrecursos'>Principais recursos</h1>

      <div className='imagens'>
        <img className='homemPeso' src={homemPeso} alt='homemPeso'></img>
        <img className='bicicleta' src={bicicleta} alt='bicicleta'></img>
        <img className='esteira' src={esteira} alt='esteira'></img>
      </div>

      <div className='quadrantes'>

        <div className='container1'>
          <h1 className='recursos-titulos'>Treinos Personalizados</h1>
          <p>Planos ajustados para diferentes objetivos (emagrecimento, hipertrofia, condicionamento).</p>
          <p> Avaliação física inicial e acompanhamento mensal.</p>
          <p> Treinadores qualificados para guiar cada etapa do processo.  </p>
        </div>

        <div className='container2'>
          <h1 className='recursos-titulos'>Variedade de Modalidades</h1>
          <p>Musculação, funcional, HIIT, yoga e pilates.</p>
          <p>Aulas coletivas dinâmicas para todos os níveis.</p>

        </div>
        <div className='container3'>
          <h1 className='recursos-titulos'> Flexibilidade e Conveniência</h1>
          <p>Horários estendidos para treinar quando quiser.   </p>
          <p>App exclusivo para agendamento de aulas e acompanhamento de progresso.</p>
          <p>Opções de planos mensais, trimestrais e anuais sem burocracia.</p>
  



        </div>
        <Link to={'/planoseprecos'}>
        <button className='infobutton3'>PLANOS E PREÇOS</button>
        </Link>


      </div>
    </div>
  )
}

export default Quadrante3;
