import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscar } from '../../service/Service'
import Barbearia from '../../models/Barbearia';

import { ServicoContext } from '../../context/ServicoContext';
import CardServico from '../../components/cards/CardServico';
import foto1 from "../../assets/bearded-mustached-barber-skull_225004-204.jpg"

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
    <div className='flex items-center ' > <div className='absolute mt-56 text-white ml-8 text-7xl'>{barbearia.nome}</div><img className='opacity-60 h-72 w-full object-cover ' src={foto1} alt="" /> </div>
    
    {filteredServicos && filteredServicos.map((item) => (
      
      <div className='container mx-auto p-10 items-center justify-center '><CardServico item={item} key={item.id} /></div>
      
    ))}
  
    
    </>
  )
}

export default BarbeariaPage