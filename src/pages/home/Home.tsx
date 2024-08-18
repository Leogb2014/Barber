import React, { useContext, useEffect, useState } from 'react'
import CardServico from '../../components/cards/CardServico'
import foto from "../../assets/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20762.jpg"


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'

import ImageSlider from '../../components/imageSlider/ImageSlider'
import { CgArrowLongLeft } from 'react-icons/cg'
import Reserva from '../reserva/Reserva'
import { ServicoContext } from '../../context/ServicoContext'
import ListaAgendamento from '../../components/agendamento/ListaAgendamento'
import Servico from '../../models/Servico'
import { AuthContext } from '../../context/AuthContext'
import Login from '../login/Login'


function Home() {
  
  const[abaReserva, setAbaReserva] = useState<boolean>(false)
  const[atributos, setAtributos] = useState<Servico>({
    id: 0,
    nome: '',
    preco: ''
  })

  const{ retornar, servico } = useContext(ServicoContext)
  const{usuario} = useContext(AuthContext)
  const token = usuario.token

  function abrirReserva(id: number){
    const item = servico.find(item => item.id === id)
    if(item){
      setAtributos({
        id: item.id,
        nome: item.nome,
        preco: item.preco
      })
      setAbaReserva(true)
    }
      
  
  }



  useEffect(() => {
    retornar()
  }, [])


  function fecharAba(){
    setAbaReserva(false)
  }
  

  return (
    <>

<div className='w-screen'>
    <ImageSlider/>
</div>

<div className='pt-6 px-6 pb-1 border-b mb-4'>
<p >Serviços</p>
</div>
<div className='flex flex-col gap-2 items-center'>
    

 {servico && servico.map((item) => (
  <>
  <button onClick={() => abrirReserva(item.id)} key={item.id}>
    <CardServico   imagem={foto} tipo={item.nome} preco={item.preco}   />
  </button>
  <div className={`fixed top-0 right-0 h-full w-full bg-[#1c1c22] text-white z-50 transform ${abaReserva ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
  <div className='mb-2 border-b-2 w-full  p-2 items-center'>
  <CgArrowLongLeft color='white' size={30} onClick={fecharAba}/></div>{token !== '' ? <Reserva servico={atributos}   /> : <Login/>}
  

  </div>
  </>
 ))}
  
 

      
</div>
 
    
<div className='pt-6 px-6 pb-1 border-b mb-4'>
<p >Reservas</p>
</div>

    <div>
     {token !== '' ? <ListaAgendamento/> : <div className='flex items-center justify-center p-4'><h1>Faça Login para ver suas reservas</h1></div>} 
    </div>
    

    </>
  )
}

export default Home