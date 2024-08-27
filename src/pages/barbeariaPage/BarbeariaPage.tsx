import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscar } from '../../service/Service'
import Barbearia from '../../models/Barbearia';

import { ServicoContext } from '../../context/ServicoContext';
import CardServico from '../../components/cards/CardServico';

function BarbeariaPage() {

    const {id} = useParams<{id: string}>()
    const[barbearia, setBarbearia] = useState<Barbearia>({} as Barbearia)

    const{servico} = useContext(ServicoContext)

    async function buscarPorId(){
        try{
            await buscar(`/barbearias/${id}`, setBarbearia)
        }catch(error){
          alert('Erro ao buscar esta barbearia')
        }
    }

  

    useEffect(() => {
      buscarPorId()
    }, [])


    const filteredServicos = servico.filter((item) => item.barbearia.id === barbearia.id)
   


  return (
    <>
    
    <div className='opacity-40 h-56 w-full object-cover'>{barbearia.foto}</div>
    {filteredServicos && filteredServicos.map((item) => (
      <div><CardServico tipo={item.nome} preco={item.preco}/></div>
    ))}
  
    
    </>
  )
}

export default BarbeariaPage