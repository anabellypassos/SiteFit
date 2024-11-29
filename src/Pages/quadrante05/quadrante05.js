import React from 'react'
import '../quadrante05/quadrante05.css';
import mulherbebendoagua from '../quadrante05/image/mulherhjd.png';
import fundocolorido from '../../images/Colorful-Holographic-Gradient-Multicolor-Blurred-Background-Design-63936110-1.png';
const Quadrante05 = () => {
  return (
    <div className='quadrante05'>
     
     <div className='sobreposicao'>
    <img  className='fundocolorido' src={fundocolorido} alt='fundocolorido'/>   
     <img  className='mulherbebendoagua'src={mulherbebendoagua} alt='mulherbebendoagua'/>
     

    <div className='container5'>
        <h1 className='dicatitulo'>
        Dicas de <br/>
        bem-estar
        </h1>
        <p className='dicaparagrafo'>
        Fale sobre as características mais <br/> 
        importantes deste produto ou serviço. <br/>
        Destacar as mais populares funciona<br/>
         também! Fale sobre as características<br/>
        mais importantes deste produto<br/>
        ou serviço.
        </p>
        <button className='btnsaibamais'>SAIBA MAIS</button>
    </div>

        </div>
      
    </div>
  )
}

export default Quadrante05
