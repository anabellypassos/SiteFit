import React from 'react'
import '../quadrante07/quadrante07.css'
import instagram from '../quadrante07/imgfinalquadrante/instagram.png';
import facebook from '../quadrante07/imgfinalquadrante/facebook.png';
const Quadrante07 = () => {
    return (
        <div className='quadro07'>

            <h1 className='fale_conosco'>
                Fale conosco
            </h1>
            < div className='telefone'>
                <p className='tel'>
                    Telefone:
                </p>
                <p>
                    11 91234-5678

                </p>
            </div>
            < div className='email'>
                <p className='em'>
                    E-Mail:
                </p>
                <p>
                    vivavida32@g.gmail.com

                </p>
                
            </div>
            <div className='redes'>
                    <p className='social'>
                        Social:
                    </p>
                    <img  className='instagram' src={instagram} alt='instagram'/>   
                    <img  className='facebook' src={facebook} alt='facebook'/>   
                </div>
        </div>
    )
}

export default Quadrante07
