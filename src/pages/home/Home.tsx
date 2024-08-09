import React from 'react'
import CardServico from '../../components/cards/CardServico'
import foto from "../../assets/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20762.jpg"
import foto2 from "../../assets/cabeleireiro-de-mao-de-cabeleireiro-com-tesoura_23-2147839850.jpg"
import foto3 from "../../assets/homem-em-um-salao-de-barbearia-fazendo-o-corte-de-cabelo-e-barba_1303-20962.avif"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'


function Home() {

  
  return (
    <>

  

<Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       
       spaceBetween={30}
      
       slidesPerView={1}
       
       
     
       className='my-10'
       navigation
     
       pagination
    
       
    >
      <SwiperSlide><CardServico imagem={foto} nome={'Cabelo'} preco={'R$35,00'}/></SwiperSlide>
      <SwiperSlide><CardServico imagem={foto2} nome={'Barba'} preco={'R$35,00'}/></SwiperSlide>
      <SwiperSlide><CardServico imagem={foto3} nome={'Cabelo e Barba'} preco={'R$70,00'}/></SwiperSlide>
     
    </Swiper>


<div className=' border border-gray-700 rounded-md m-10  flex justify-between'>
    <div className='flex flex-col gap-4 mx-4 text-center'>
      <div className=' rounded-2xl mt-2 text-black text-center font-bold bg-purple-600'>
        confirmado
      </div>
      <div className='font-bold text-white'>
        Cabelo e barba
      </div>
      <div className='flex gap-2 items-center' >
        <img src="http://github.com/Leogb2014.png" className='rounded-full w-8' alt="" />
        <p className='text-white'>Leonardo</p>
      </div>


    </div>

      <div className='border-l-2 p-7 border-gray-700 text-white font-semibold text-center'>
        <p>Agosto</p>
        <p>05</p>
        <p>20:30</p>
      </div>
</div>
    




  
  
  

    </>
  )
}

export default Home