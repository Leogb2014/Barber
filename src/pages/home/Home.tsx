import React, { useContext, useEffect, useState } from 'react'
import CardServico from '../../components/cards/CardServico'
import foto from "../../assets/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20762.jpg"
import foto2 from "../../assets/cabeleireiro-de-mao-de-cabeleireiro-com-tesoura_23-2147839850.jpg"
import foto3 from "../../assets/homem-em-um-salao-de-barbearia-fazendo-o-corte-de-cabelo-e-barba_1303-20962.avif"
import foto4 from "../../assets/cadeiras-vintage-na-barbearia_155003-10150.jpg"




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'
import CardAgendamento from '../../components/cards/CardAgendamento'

import ImageSlider from '../../components/imageSlider/ImageSlider'
import { buscar } from '../../service/Service'
import { CgArrowLongLeft } from 'react-icons/cg'
import Reserva from '../reserva/Reserva'
import { ServicoContext } from '../../context/ServicoContext'


function Home() {
  
  const[abaReserva, setAbaReserva] = useState<boolean>(false)

  const{ retornar, servico } = useContext(ServicoContext)
  const[atributos, setAtributos] = useState({
    tipo: '',
    preco: ''
  })

  function abrirReserva(id: number){
    const item = servico.find(item => item.id === id)
    if(item){
      setAtributos({
        tipo: item.attributes.tipo,
        preco: item.attributes.preco
      })
    }
      setAbaReserva(true)
  
  }


  function fecharAba(){
    setAbaReserva(false)
  }
  
  useEffect(() => {
    retornar()
  }, [])


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
    <CardServico   imagem={foto} tipo={item.attributes.tipo} preco={item.attributes.preco}   />
  </button>
  <div className={`fixed top-0 right-0 h-full w-full bg-[#1c1c22] text-black z-50 transform ${abaReserva ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
  <div className='mb-2 border-b-2 w-full  p-2 items-center'>
  <CgArrowLongLeft color='white' size={30} onClick={fecharAba}/></div><Reserva tipo={atributos.tipo} preco={atributos.preco}  />
  

  
  
  
  </div>
  </>

))}
      
</div>





     
    
<div className='pt-6 px-6 pb-1 border-b mb-4'>
<p >Reservas</p>
</div>
    <div>
      <CardAgendamento status={'confirmado'} serviço={'Cabelo e barba'} nome={'Leonardo'} mes={'Agosto'} dia={'06'} hora={'18:30'} />
    </div>
    

   


  
  
  

    </>
  )
}

export default Home