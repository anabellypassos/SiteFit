import React from 'react';
import AppBar from '../../Pages/AppBar/appBar';
import formstyle from '../Form/form.css';
import logo from '../../images/imagemcelular/logo.png';

const form = () => {
  return (
    <div>
      <AppBar />

      <div className='row_form'>
        <img className='logoform' src={logo} alt="Logo" />
        <h1 className='titulologo'>PowerFit</h1>
        <p className='info_form'>Preencha este formulário e entraremos em contato para tirar todas as suas dúvidas! </p>
        <div className='container_form'>
          <h1 className='titulo_form'>Boas vindas ao espaço para você tirar dúvidas!</h1>
          <label>Digite o seu e-mail:</label>
            <input className='email'id='email' type='text' placeholder='antonio123@gmail.com'></input>
    
        <label>Digite o seu nome completo :</label>
            <input className='nomeCompleto'id='nomeCompleto' type='text' placeholder='Antonio Carlos de Neves'></input>
        
        <label>Telefone:</label>
            <input className='telefone'id='telefone' type='text' placeholder='antonio123@gmail.com'></input>
        </div>
        </div>
   
        



    </div>
  )
}

export default form
