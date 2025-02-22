import React from 'react';
import '../quadrante06/quadrante06.css';

const Quadrante06 = () => {
  return (
    <div className='quadrante06'>
      <h1 className='title6'>Depoimentos</h1>

      <div className='quadrantes6'>
        < div className='quadrantecontainer1' >
          <p className='depoimento1'>
          Na PowerFit, encontrei o equilíbrio perfeito entre treino e bem-estar!

            <p className='pessoa1'>
            Lucas, Estudante
            </p>
          </p>
        </div>

        < div className='quadrantecontainer2' >
          <p className='depoimento2'>
          As aulas são incríveis e o suporte da equipe faz toda a diferença!

            <p className='pessoa2'>
            Amanda, Profissional de Marketing.
            </p>
          </p>

        </div>
        < div className='quadrantecontainer3'>
          <p className='depoimento3'>
          Adoro a variedade de modalidades e a comunidade motivadora!

            <p className='pessoa3'>
            Pedro, Empresário.
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Quadrante06;
