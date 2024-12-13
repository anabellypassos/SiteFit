import React from 'react'
import '../quadrante3/quadrante3.css';
import peso from '../quadrante3/imagensquadrante3/peso.png';
import mao from '../quadrante3/imagensquadrante3/mao.png';
import coracao from '../quadrante3/imagensquadrante3/coracao.png';


const Quadrante3 = () => {
  return (
    <section className='container'>

      <h1 className='title'>Principais recursos</h1>

      <div className='imagens'>
        <img className='peso' src={peso} alt='peso'></img>
        <img className='mao' src={mao} alt='mao'></img>
        <img className='coracao' src={coracao} alt='coracao'></img>
      </div>

      <div className='quadrantes'>

        <div className='container1'>
          <p>Acompanhamento em Tempo Real <br/>
          Receba suporte profissional durante <br/>
           os treinos, garantindo a execução  <br/>
           correta dos exercícios e maior  <br/>
           segurança no seu progresso.<br/>
           
            </p>
        </div>

        <div className='container2'>
        <p>Treinos Personalizados <br/>
         Planos de exercícios adaptados<br/>
          ao seu nível de condicionamento físico,<br/>
           objetivos pessoais e rotina diária, para<br/>
            resultados eficientes e duradouros. <br/>
            
            </p>

        </div>
        <div className='container3'>
        <p>Flexibilidade e Conforto <br/>
          Realize seus treinos em casa, no horário que<br/>
         preferir, com orientações simples e práticas<br/>
          que se encaixam no seu dia a dia.
            <br/>
         
            </p>

        </div>


      </div>
    </section>
  )
}

export default Quadrante3;
