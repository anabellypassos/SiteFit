import React from 'react';
import AppBar from '../../Pages/AppBar/appBar';
import formstyle from '../Form/form.css';

const Form = () => {
  return (
    <div className="form-page">
      <AppBar />

      <div className="content">
        <h1 className="titulologo">PowerFit</h1>
        <p className="info_form">
          Preencha este formulário e entraremos em contato para tirar todas as suas dúvidas!
        </p>

        <div className="container_form">
          <h1 className="titulo_form">Boas-vindas ao espaço para tirar dúvidas!</h1>

          <form>
            <label htmlFor="email">Digite o seu e-mail:</label>
            <input className="emailform" id="email" type="email" placeholder="antonio123@gmail.com" />

            <label htmlFor="nomeCompletoform">Digite o seu nome completo:</label>
            <input className="nomeCompleto" id="nomeCompleto" type="text" placeholder="Antonio Carlos de Neves" />

            <label htmlFor="telefone">Telefone:</label>
            <input className="telefoneform" id="telefone" type="tel" placeholder="(11) 99999-9999" />

            <label htmlFor="duvida">Digite sua dúvida:</label>
            <textarea className="duvida" id="duvida" placeholder="Descreva sua dúvida aqui..." rows="4"></textarea>

            <button type="submit" className="btn-enviar">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
