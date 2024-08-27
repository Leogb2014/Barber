import React, {  useContext, useEffect, useState } from 'react'
import foto from "../../assets/jovem-na-barbearia-aparando-cabelo_1303-26254.avif"

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

import { ServicoContext } from '../../context/ServicoContext'
import { AuthContext } from '../../context/AuthContext'

import { FaMagnifyingGlass } from 'react-icons/fa6';
import Agendamento from '../../models/Agendamento';

import { buscar, buscarAgenda } from '../../service/Service';
import CardAgendamento from '../../components/cards/CardAgendamento';
import foto2 from '../../assets/cadeiras-vintage-na-barbearia_155003-10150.jpg'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import Sobre from '../sobre/Sobre';

import { motion } from 'framer-motion';
import CardBarbearias from '../../components/cards/CardBarbearias';
import Barbearia from '../../models/Barbearia';
import { Link } from 'react-router-dom';

const cardVariants = {
    hiddenRight: { opacity: 0, x: '100%' },  // Inicia fora da tela à direita
    visibleRight: { opacity: 1, x: 0 },      // Move para a posição original
    hiddenLeft: { opacity: 0, x: '-100%' },  // Inicia fora da tela à esquerda
    visibleLeft: { opacity: 1, x: 0 },       // Move para a posição original
};

function Home() {
  

  const [searchTerm, setSearchTerm] = useState<string>('');

  const [text] = useTypewriter({
    words: ["Transformação", "Inspiração", "Personalidade"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 100,
    

  })

  
  const[agendamento, setAgendamento]  = useState<Agendamento[]>([])

  
  const[barbearias, setBarbearias] = useState<Barbearia[]>([])

  async function buscarBarbearias(){
    try{
      await buscar("/barbearias/all", setBarbearias)
    }catch(Error){
      alert("Erro ao buscar barbearias")
    }
  }

  useEffect(() => {
    buscarBarbearias()
  }, [barbearias.length])



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
  


  const{ retornar, servico } = useContext(ServicoContext)
  const{usuario} = useContext(AuthContext)
  const token = usuario.token




  useEffect(() => {
    retornar()
  }, [])


  
  

  const filteredBarbearias = barbearias.filter((barbearia) =>
     barbearia.nome.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <>
 
<div  className='flex items-center justify-center '>
<h1 className='hidden lg:block  gap-1 font-serif lg:text-7xl text-white m-20 z-50 absolute'>
              <span>
                {text}
              </span>
              <span >
                <Cursor/>
              </span>
          
            </h1>
    <img className='opacity-40 h-56 w-full object-cover' src={foto2} alt="" />
</div>

<div className="container flex justify-center  mx-auto w-1/2 pt-10 ">
                  <FaMagnifyingGlass className='absolute mr-48 mt-4 '/>
                    <input
                        type="text"
                        placeholder="Buscar estabelecimentos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 my-auto border-2 pl-10 rounded-full  text-black bg-[#e9f5db]  "
                    />
                </div>
               

                

<div className='container rounded-xl mt-10 lg:px-36 mx-auto  '>
  <div  className='  '>

<Swiper
       modules={[Navigation, Pagination, A11y]}
    
       spaceBetween={0}
       
    
       navigation
       breakpoints={{
        640:{
          slidesPerView: 1,
        
        },
        1024: {
          slidesPerView: 3,
        }
       }}
       
 
    >
 {filteredBarbearias && filteredBarbearias.map((item) => (
  <>

  
  <div className=' ' >
    
  <SwiperSlide  > <Link  to={`/barbeariaPage/${item.id}`}><CardBarbearias key={item.id} item={item}/></Link> </SwiperSlide>  

  
  </div>
  
  
  
  </>
))}
</Swiper>
</div>

<div className='p-32 flex gap-20' style={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                initial="hiddenLeft"
                animate="visibleLeft"
                variants={cardVariants}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                style={{ width: '300px', height: '200px', background: '' }}
            >
              <div className=' rounded-lg p-10'><Sobre/></div>
            </motion.div>
            <motion.div
                 initial="hiddenRight"
                animate="visibleRight"
                variants={cardVariants}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                style={{ width: '300px', height: '200px', background: '' }}
            >
              <div className='rounded-lg p-10'><img className='h-96 object-cover mix-blend-lighten' src={foto} alt="" /></div>
            </motion.div>
            
            </div>

</div>

 
 
<div className='pt-6 px-16 m-40 pb-1 container mx-auto flex flex-col justify-center '>
<p className='border-b mb-4'>Reservas Ativas</p>


    <div className='grid lg:grid-cols-3  justify-center'>
        {agendamento.map((item) => (
            <CardAgendamento key={item.id} agendamento={item}/>
        ))}
    </div>
    </div>

    </>
  )
}

export default Home