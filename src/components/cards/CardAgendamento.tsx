import React, { useState } from 'react'
import Agendamento from '../../models/Agendamento'

import { Link} from 'react-router-dom'


interface cardAgendamentoProps{
  agendamento: Agendamento
}

function CardAgendamento({agendamento}: cardAgendamentoProps) {

  const[abaReserva, setAbaReserva] = useState<boolean>(false)

  function fecharAba(){
    setAbaReserva(!abaReserva)
  }


  return (
    <>
    <div className=' border border-gray-700 rounded-md m-10 h-auto w-72 flex  justify-between'>

    <div className='flex flex-col gap-2 mx-4 text-center items-center justify-center'>
      
    <div className="badge badge-accent  font-bold">Confirmado</div>
      
      <div className='font-bold text-white'>
      {agendamento.servico.nome}
      </div>


    </div>

      <div className='border-l-2 p-7 border-gray-700 text-white font-semibold text-center'>
        

        
      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box  absolute mt-10 ml-3">
 
  <li>
    <details >
      <summary></summary>
      <ul>
        <li><Link to={`/cancelarReserva/${agendamento.id}`}><a>Cancelar</a></Link></li>
        <li>
        <Link to={`/reagendar/${agendamento.id}`} ><a>Reagendar</a></Link>
        </li>
      </ul>
    </details>
  </li>

</ul>

        <p>{agendamento.dia}</p>
        <p>{agendamento.hora}</p>
        
      </div>
</div>


  </>
  )
}

export default CardAgendamento