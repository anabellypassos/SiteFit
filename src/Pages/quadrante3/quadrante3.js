import React from 'react'
import '../quadrante3/quadrante3.css';
import homemPeso from '../quadrante3/imagensquadrante3/homemcoPeso.png';
import bicicleta from '../quadrante3/imagensquadrante3/bicicleta.png';
import esteira from '../quadrante3/imagensquadrante3/esteira.png';


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
          <p>Acompanhamento em Tempo Real
          Receba suporte profissional durante
           os treinos, garantindo a execução 
           correta dos exercícios e maior 
           segurança no seu progresso.
           
            </p>
        </div>

        <div className='container2'>
        <p>Treinos Personalizados
         Planos de exercícios adaptados
          ao seu nível de condicionamento físico,
           objetivos pessoais e rotina diária, para
            resultados eficientes e duradouros. 
            
            </p>

        </div>
        <div className='container3'>
        <p>Flexibilidade e Conforto 
          Realize seus treinos em casa, no horário que
         preferir, com orientações simples e práticas
          que se encaixam no seu dia a dia.
            
         
            </p>

        </div>


      </div>
    </div>
  )
}

export default Quadrante3;
