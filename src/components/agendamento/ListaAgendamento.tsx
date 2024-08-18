import React, { useContext, useEffect, useState } from 'react'
import Agendamento from '../../models/Agendamento'
import { AuthContext } from '../../context/AuthContext'
import { buscarAgenda } from '../../service/Service'
import CardAgendamento from '../cards/CardAgendamento'
import { useNavigate } from 'react-router-dom'


function ListaAgendamento() {

    const[agendamento, setAgendamento]  = useState<Agendamento[]>([])
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
    <div>
        {agendamento.map((item) => (
            <CardAgendamento key={item.id} agendamento={item}/>
        ))}
    </div>
  )
}

export default ListaAgendamento