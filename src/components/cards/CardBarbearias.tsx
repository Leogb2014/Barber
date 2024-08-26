import React, { } from 'react'
import Barbearia from '../../models/Barbearia'


interface barbeariaProps{
  item: Barbearia
}

function CardBarbearias({item}: barbeariaProps) {


  return (
    <div className="card glass w-96">
  <figure>
    <img
      src={item.foto}
      alt="car!" />
  </figure>
  <div className="card-body">
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