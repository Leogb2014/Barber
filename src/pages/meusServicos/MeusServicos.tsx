import React, { useContext, useEffect } from 'react'
import { AuthBarbeariaContext } from '../../context/AuthBarbeariaContext'
import CardServico from '../../components/cards/CardServico'

function MeusServicos() {

    const{barbearia} = useContext(AuthBarbeariaContext)

    useEffect(() => {

    }, [barbearia.servico.length])

  return (
    <div className='container mx-auto h-screen items-center justify-center flex'>
    <div className='container mx-auto  justify-start rounded-xl h-96 m flex flex-col gap-4 p-2'>
   {barbearia.servico && barbearia.servico.map((item) => (
    <div><CardServico item={item} key={item.id}/></div>
   ))}
   </div>
   </div>
  )
}

export default MeusServicos