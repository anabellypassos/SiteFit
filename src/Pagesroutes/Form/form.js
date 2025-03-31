import React from "react";
import AppBar from "../../Pages/AppBar/appBar";
import formstyle from "../Form/form.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm();

  const onSubmit = (data) => console.log("Dados enviados:", data);

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

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* E-mail */}
            <label htmlFor="email">Digite o seu e-mail:</label>
            <input
              className="emailform"
              id="email"
              type="email"
              placeholder="antonio123@gmail.com"
              {...register("email", {
                required: "O e-mail é obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "E-mail inválido",
                },
              })}
            />
            <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="error" >{message}</p>} />

            {/* Nome Completo */}
            <label htmlFor="nomeCompleto">Digite o seu nome completo:</label>
            <input
              className="nomeCompleto"
              id="nomeCompleto"
              type="text"
              placeholder="Antonio Carlos de Neves"
              {...register("nomeCompleto", {
                required: "O nome é obrigatório",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                  message: "O nome deve conter apenas letras e espaços",
                },
                minLength: {
                  value: 3,
                  message: "O nome deve ter pelo menos 3 caracteres",
                },
              })}
            />
            <ErrorMessage errors={errors} name="nomeCompleto" render={({ message }) => <p className="error">{message}</p>} />

            {/* Telefone */}
            <label htmlFor="telefone">Telefone:</label>
            <input
              className="telefoneform"
              id="telefone"
              type="tel"
              placeholder="(11) 99999-9999"
              {...register("telefone", {
                required: "O telefone é obrigatório",
                pattern: {
                  value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                  message: "Número de telefone inválido",
                },
              })}
            />
            <ErrorMessage errors={errors} name="telefone" render={({ message }) => <p className="error">{message}</p>} />

            {/* Dúvida */}
            <label htmlFor="duvida">Digite sua dúvida:</label>
            <textarea
              className="duvida"
              id="duvida"
              placeholder="Descreva sua dúvida aqui..."
              rows="4"
              {...register("duvida", {
                required: "Este campo é obrigatório",
              })}
            />
            <ErrorMessage errors={errors} name="duvida" render={({ message }) => <p className="error">{message}</p>} />

            {/* Botão de Enviar */}
            <button type="submit" className="btn-enviar">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
