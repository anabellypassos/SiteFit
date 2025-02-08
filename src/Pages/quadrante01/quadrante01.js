import React, { useState, useEffect } from 'react';
import logo from '../../images/990a7aff-7fd0-4f0d-a789-ce13e7b72efb.png';
import '../quadrante01/quadrante01.css';

import fundocolor from '../../images/Colorful-Holographic-Gradient-Multicolor-Blurred-Background-Design-63936110-1.png';
import celular from '../../images/celular.png';
import abdomen from '../../images/imagemcelular/abdomen.png';
import alter from '../../images/imagemcelular/alter.png';
import mulher from '../../images/imagemcelular/mulher.png';
import acesasorios from '../../Pages/quadrante01/imageq1/images__1_-removebg-preview.png'
import treinoemcasa from '../quadrante01/imageq1/exercicios-fisico-em-casa-treino-04.png'
const Quadrante01 = () => {

  // Estado para rastrear a imagem atualmente exibida
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de imagens
  const images = [abdomen, alter, mulher, treinoemcasa];

  // Mudar a imagem automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca a cada 3 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='containerQuadrante01'>

 
    <div className='fundo'>

      

      <div className='quadrante1'>

        <h1 className='Texto_principal'>
          <div>A vida precisa de movimento</div>
    
        </h1>

        <p className='pargrafo_quadrante1'>
          <div>Faça do movimento uma parte da sua  vida diária com exercícios curtos e fáceis</div>


        </p>
        <button className='infobutton'>SAIBA MAIS</button>
      </div>

      <div className='telacelular'>
        <img className='slider-image'
          src={images[currentImageIndex]}
          alt={`Slider${currentImageIndex}`}

        />
        <img className='acesasorios' src={acesasorios} alt='acesasorios'></img>
        < div className='borda'> 
          <img className='celular' src={celular} alt='celuler'></img>

        </div>

      </div>
    </div> 
      </div>
  );
}

export default Quadrante01;
