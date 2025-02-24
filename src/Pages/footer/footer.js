import React from 'react';
import './footer.css';
import imagemBanner from '../footer/imgfinalquadrante/3bed6a57-2a77-494c-aad6-5afa8d90b84a.png';
import logofooter from '../../images/imagemcelular/logo.png';
import { IoLogoWhatsapp } from "react-icons/io";
import whatsapp from './imgfinalquadrante/images-removebg-preview (3).png';

const Footer = () => {
    return (
        <div className='quadro07'>
            <div className='localLogoMarca'>
                <img className='logofooter' src={logofooter} alt="logofooter"/>  
                <h1 className='tituloAppBarPOwer'>PowerFit</h1>
            </div>
            <h1 className='fale_conosco'>Fale conosco</h1>
            <img className='imagemBanner' src={imagemBanner} alt='imagemBanner'/>   
            <div className='telefone'>
                <p className='tel'>Telefone:</p>
                <p>11 91234-5678</p>
            </div>
            <div className='email'>
                <p className='em'>E-Mail:</p>
                <p>powerfit32@g.gmail.com</p>
            </div>
            <div className='redes'>
                <p className='social'>
                    Social: 
                </p>
            <img className='whatsapp' src={whatsapp} alt='whatsapp'></img>
            </div>
        </div>
    );
}

export default Footer;
