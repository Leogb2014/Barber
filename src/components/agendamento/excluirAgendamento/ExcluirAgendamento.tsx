import React, { useContext, useEffect, useState } from 'react'
import Agendamento from '../../../models/Agendamento'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import {  buscarAgenda, deletar } from '../../../service/Service'

function ExcluirAgendamento() {

const[agendamento, setAgendamento] = useState<Agendamento>({} as Agendamento)

const navigate = useNavigate()

const { id } = useParams<{ id: string}>()

const {usuario, handleLogout} = useContext(AuthContext)
const token = usuario.token

async function buscarPorId(id: string){
    try{
        await buscarAgenda(`/agendamentos/${id}`, setAgendamento, {
            headers: {
                'Authorization': token
            }
        })
    }catch(error: any){
        if(error.toString().includes('403')){
            alert('O token expirou, favor logar novamente')
            handleLogout()
        }

    }
}

useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/minhasReservas")
  }

async function deletarAgendamento(){
    try{
        await deletar(`/agendamentos/${id}`, {
            headers: {
                'Authorization': token
            }
        })

        alert('Reserva cancelada')
        retornar()
    }catch(error){
        ('Erro ao cancelar reserva')
    }
}

  return (
    <>
    <div className='container mx-auto flex flex-col items-center'>
    <h1 className='text-4xl text-center my-4 p-10'>Cancelar Reserva</h1>
    <p className='text-center text-xl font-semibold mb-4'>Você tem certeza de que deseja cancelar a reserva?</p>

    <div className=' border border-gray-700 rounded-md m-10 h-auto w-72 flex justify-between'>
    <div className='flex flex-col gap-2 mx-4 text-center items-center justify-center'>
      
      <div className='font-bold text-white'>
      {agendamento.servico?.nome}
      </div>

    </div>

      <div className='border-l-2 p-7 border-gray-700 text-white font-semibold text-center'>
        <p>{agendamento.dia}</p>
        <p>{agendamento.hora}</p>
        <p>    </p>
      </div>
</div>

<div className="flex w-1/5 justify-center gap-9">
         <button className='text-slate-100 bg-gray-500 hover:bg-gray-800 w-full py-2 rounded-2xl' onClick={retornar}>Não</button>
         <button className='w-full text-slate-100 bg-purple-600 hover:bg-purple-900  rounded-2xl' onClick={deletarAgendamento} >
        Sim
      </button>
      </div>
    </div>
    </>
  )
}

export default ExcluirAgendamento