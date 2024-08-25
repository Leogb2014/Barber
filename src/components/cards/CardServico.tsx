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

<div className="card bg-base-100 image-full w-56 shadow-xl">
  <figure>
    <img
      src={props.imagem}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-white">{props.tipo}</h2>
    
    <div className="card-actions justify-between items-center ">
      <p className='text-white '>{props.preco}</p>
      <button className="btn btn-primary bg-purple-600 hover:bg-white hover:text-purple-600 text-white">Reservar</button>
    </div>
  </div>
</div>
   
    </>
  )
}

export default CardServico