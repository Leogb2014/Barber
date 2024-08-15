import React from 'react'

interface cardAgendamentoProps{
    status: string,
    serviço: string,
    nome: string,
    mes: string,
    dia: string,
    hora: string
}

function CardAgendamento(props: cardAgendamentoProps) {
  return (
    <div className=' border border-gray-700 rounded-md m-10  flex justify-between'>
    <div className='flex flex-col gap-4 mx-4 text-center'>
      <div className=' rounded-2xl mt-2 text-black text-center font-bold bg-purple-600'>
        {props.status}
      </div>
      <div className='font-bold text-white'>
        {props.serviço}
      </div>
      <div className='flex gap-2 items-center' >
        <img src="http://github.com/Leogb2014.png" className='rounded-full w-8' alt="" />
        <p className='text-white'>{props.nome}</p>
      </div>


    </div>

      <div className='border-l-2 p-7 border-gray-700 text-white font-semibold text-center'>
        <p>{props.mes}</p>
        <p>{props.dia}</p>
        <p>{props.hora}</p>
      </div>
</div>
  )
}

export default CardAgendamento