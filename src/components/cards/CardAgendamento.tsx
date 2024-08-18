import React, { useContext, useEffect, useState } from 'react'
import Agendamento from '../../models/Agendamento'
import {  buscarAgenda } from '../../service/Service'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


interface cardAgendamentoProps{
  agendamento: Agendamento
}

function CardAgendamento(props: cardAgendamentoProps) {

  const[agendamento, setAgendamento]  = useState<Agendamento[]>({} as Agendamento[])
  const navigate = useNavigate()

  const{usuario} = useContext(AuthContext)
  const token = usuario.token



  async function buscarAgendamentos(){
    try{
      if(token !== ''){
        await buscarAgenda('/agendamentos', setAgendamento, {
          headers: { Authorization: token },
        })
      }
    }catch(error){
      alert('erro ao buscar')
    }
  }

  useEffect(() => {
    if(token === ''){
      navigate('/home')
    }
    buscarAgendamentos()
  }, [token])



  return (
    <div className=' border border-gray-700 rounded-md m-10  flex justify-between'>
    <div className='flex flex-col gap-2 mx-4 text-center'>
      
      <div className="badge badge-secondary font-bold mt-2">Confirmado</div>
      
      <div className='font-bold text-white'>
      {props.agendamento.servico.nome}
      </div>
      <div className='flex gap-2 items-center' >
        <img src="http://github.com/Leogb2014.png" className='rounded-full w-8' alt="" />
        <p className='text-white'>{props.agendamento.usuario.nome}</p>
      </div>


    </div>

      <div className='border-l-2 p-7 border-gray-700 text-white font-semibold text-center'>
        <p>{props.agendamento.dia}</p>
        <p>{props.agendamento.hora}</p>
        <p>    </p>
      </div>
</div>
  )
}

export default CardAgendamento