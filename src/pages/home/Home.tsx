import React, { useContext, useEffect, useState } from 'react'
import CardServico from '../../components/cards/CardServico'
import foto from "../../assets/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20762.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  A11y, } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-cards'

import { CgArrowLongLeft } from 'react-icons/cg'
import Reserva from '../reserva/Reserva'
import { ServicoContext } from '../../context/ServicoContext'

import Servico from '../../models/Servico'
import { AuthContext } from '../../context/AuthContext'
import Login from '../login/Login'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Agendamento from '../../models/Agendamento';

import { buscarAgenda } from '../../service/Service';
import CardAgendamento from '../../components/cards/CardAgendamento';
import foto2 from '../../assets/cadeiras-vintage-na-barbearia_155003-10150.jpg'
import { Cursor, useTypewriter} from 'react-simple-typewriter'



function Home() {
  

  const [searchTerm, setSearchTerm] = useState<string>('');

  const [text] = useTypewriter({
    words: ["Transformação", "Inspiração", "Personalidade"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 100,
    

  })

  
  const[agendamento, setAgendamento]  = useState<Agendamento[]>([])


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
  buscarAgendamentos()
}, [agendamento.length])
  

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
  

  const filteredServicos = servico.filter((servico) =>
     servico.nome.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <>
 
<div  className='flex items-center justify-center '>
<h1 className='flex gap-1 font-serif lg:text-7xl text-white m-20 z-50 absolute'>
              <span>
                {text}
              </span>
              <span >
                <Cursor/>
              </span>
          
            </h1>
    <img className='opacity-40 h-56 w-full object-cover' src={foto2} alt="" />
</div>

<div className="container flex justify-center  mx-auto w-1/2 pt-10">
                  <FaMagnifyingGlass className='absolute mr-48 mt-4 '/>
                    <input
                        type="text"
                        placeholder="Buscar serviços..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 my-auto border-2 pl-10 rounded-full  text-black bg-[#e9f5db] "
                    />
                </div>

<div className='container rounded-xl mt-10 mx-auto  '>
  <div  className='  '>

    
<Swiper
       modules={[Navigation, Pagination, A11y]}
    
       spaceBetween={0}
       pagination={{clickable: true}}
    
       navigation
       breakpoints={{
        640:{
          slidesPerView: 1,
        
        },
        1024: {
          slidesPerView: 4,
        }
       }}
       
 
    >
 {filteredServicos && filteredServicos.map((item) => (
  <>

  
  <div className=' ' >
  <SwiperSlide  onClick={() => abrirReserva(item.id)}><CardServico key={item.id}  imagem={foto} tipo={item.nome} preco={item.preco}   /></SwiperSlide>  

  
  </div>
  
  
  </>
))}
</Swiper>
</div>

</div>
<div className={`fixed top-0 right-0 h-full w-full lg:w-1/3 bg-[#1c1c22] text-white z-50 transform ${abaReserva ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
  <div className='mb-2 border-b-2 w-full  p-2 items-center'>
  <CgArrowLongLeft color='white' size={30} onClick={fecharAba}/></div>{token !== '' ? <Reserva  servico={atributos}   /> : <Login/>}
  
  </div>
 
 
<div className='pt-6 px-16 pb-1 container mx-auto flex flex-col justify-center '>
<p className='border-b mb-4'>Reservas Ativas</p>


    <div className='grid grid-cols-3'>
        {agendamento.map((item) => (
            <CardAgendamento key={item.id} agendamento={item}/>
        ))}
    </div>
    </div>

    </>
  )
}

export default Home