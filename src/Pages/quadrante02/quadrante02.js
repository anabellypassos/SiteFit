import React from 'react'
import '../quadrante02/quadrante02.css';
const Quadrante02 = () => {

  return (
    <section className='quadro2'>
      <h1 className='titulo'>
       NOSSOS PLANOS</h1>
      <div className='containers-planos'>
      <div className='mensal'>
          <h1 className='mensal-titulos'> Plano Black</h1>
          <p className='valor-mensal'>R$99/mês</p>
          <p className='fidelidade'>12 meses de fidelidade.</p>
          <p className='acesso'>Acesso limitado a +1.000 academias.</p>
          <p className='acesso'> Leve 5 amigos por mês para treinar com você</p>
          <p className='acesso'> Cadeira de massagem.</p>
          <button className='contratar'> Contrar Agora</button>
        </div>
        <div className='trimestral'>
          <h1 className='mensal-trimestral'> Plano Fit</h1>
          <p className='valor-trimestral'>R$89/mês</p>
          <p className='fidelidade'>12 meses de fidelidade.</p>
          <p className='acesso'>Power Fit GO(treinos online) no app.</p>
          <p className='acesso'>Área de musculação e aeróbicos.</p>
          <p className='acesso'>Power Fit App.</p>
          <button className='contratar'> Contrar Agora</button>
        </div>
        <div className='anual'>
          <h1 className='mensal-anual'> Plano Power</h1>
          <p className='valor-anual'>R$119/mês</p>
          <p className='fidelidade'>Sem fidelidade.</p>
          <p className='acesso'>Power Fit GO(treinos online) no app</p>
          <p className='acesso'>Área de musculação e aeróbicos.</p>
          <p className='acesso'>Power Fit App.</p>
          <button className='contratar'> Contrar Agora</button>
        </div>
      </div>

    </section>
  )
}

export default Quadrante02;
