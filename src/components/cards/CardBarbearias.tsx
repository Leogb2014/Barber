import React, { } from 'react'
import Barbearia from '../../models/Barbearia'
import foto1 from '../../assets/bearded-mustached-barber-skull_225004-204.jpg'


interface barbeariaProps{
  item: Barbearia
}

function CardBarbearias({item}: barbeariaProps) {


  return (
    <div className="card glass w-96 h-96">
  <figure>
    <img
      src={foto1}
      alt="car!"  />
  </figure>
  <div className="card-body h-40 text-white">
    <h2 className="card-title">{item.nome}</h2>
    <p>{item.endereco}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Serviços</button>
    </div>
  </div>
</div>
  )
}

export default CardBarbearias