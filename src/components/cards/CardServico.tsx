import React, {   } from 'react'
import "react-datepicker/dist/react-datepicker.css";


interface cardServicoProps{
    imagem: string
    tipo: string
    preco: string
}

function CardServico(props: cardServicoProps) {



  return (
    <>
   
    <div  className='flex w-96 flex-col rounded-xl border border-slate-700 shadow-2xl'>
      <div className='flex'>
        <div className='w-40 p-4'>
            <img className='rounded-xl ' src={props.imagem} alt="" />
            
        </div>
        <div className='pt-4 flex flex-col gap-4 items-start'>
        <p className='font-bold text-white '>
            {props.tipo}
        </p>
        
       

        <div className='text-white w-64 flex pr-4 pb-4 justify-between '>
        <p className='text-purple-500 font-semibold'> {props.preco}</p>
        <button  className=' font-semibold  text-white px-2 text-sm border rounded-xl  hover:bg-white hover:text-black' >Reservar</button>

      </div>
         </div>

        </div>
    </div>

  

    
   




   
    </>
  )
}

export default CardServico