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
          <p>Escreva uma característica <br/>
            essencial do aplicativo que <br/>
            está sendo anunciado.
            </p>
        </div>

        <div className='container2'>
        <p>Escreva uma característica <br/>
            essencial do aplicativo que <br/>
            está sendo anunciado.
            </p>

        </div>
        <div className='container3'>
        <p>Escreva uma característica <br/>
            essencial do aplicativo que <br/>
            está sendo anunciado.
            </p>

        </div>


      </div>
    </section>
  )
}

export default Quadrante3;
