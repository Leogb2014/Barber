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

      <div className='border-l-2 p-7 border-gray-700 text-white font-semibold flex flex-col items-center text-center'>
        

        
      

        <p>{agendamento.dia}</p>
        <p>{agendamento.hora}</p>
        
      <ul className="menu lg:menu-horizontal bg-base-200 absolute mt-11 rounded-box ">
 
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
      </div>

</div>


  </>
  )
}

export default CardAgendamento