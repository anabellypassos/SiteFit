import React from 'react'
import Appbar from '../../Pages/AppBar/appBar';
import '../PlanosEPrecos/planoseprecos.css'
const planoseprecos = () => {
  return (
    <div className='pageplanos'>
      <Appbar />
      <h1 className='title_planos'>Compare os Planos Power Fit Disponíveis </h1>
      <p className='paragrafo_planos'>Planos acessíveis para você treinar em nossas academias de alto padrão</p>
      <div className='containers_planos'>
        <div className='container_plano1'>

        </div>
        <div className='container_plano2'>

        </div>
        <div className='container_plano3'>

        </div>

      </div>
    </div>
  )
}

export default planoseprecos
