import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";



interface cardServicoProps{
    imagem: string
    tipo: string
    preco: string
}

function CardServico(props: cardServicoProps) {



  return (
    <>
   
    <div  className='h-auto w-auto rounded-xl border flex border-slate-700 '>
      <div className='flex  lg:flex-col items-center'>
        <div className='lg:pt-4 '>
            <img className='rounded-xl h-full object-cover w-48 lg:w-52' src={props.imagem} alt="" />
            
        </div>
        <div className='pt-4 flex flex-col items-center gap-2 '>
              <p className='font-bold text-white'>
                  {props.tipo}
              </p>
     
              <div className='text-white lg:w-60 w-40 flex flex-col items-center justify-between gap-2 mb-4  '>
              <p className='text-purple-500 font-semibold'> {props.preco}</p>
              <button  className=' font-semibold  text-white px-2  text-sm border rounded-xl  hover:bg-white hover:text-black' >Reservar</button>

                </div>
         </div>

        </div>
    </div>

  

    
   




   
    </>
  )
}

export default CardServico