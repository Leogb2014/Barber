import React, { useContext, useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { CgArrowLongLeft } from 'react-icons/cg';
import Servico from '../../models/Servico';
import { AuthContext } from '../../context/AuthContext';
import Reserva from '../../pages/reserva/Reserva';
import Login from '../../pages/login/Login';



interface cardServicoProps{
    item: Servico
}

function CardServico({item}: cardServicoProps) {

  const[abaReserva, setAbaReserva] = useState<boolean>(false)
  const {usuario} = useContext(AuthContext)

  function fecharAba(){
    setAbaReserva(!abaReserva)
  }


  return (
    <>

<div className="card bg-base-100 image-full w-56 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title text-white">{item.nome}</h2>
    
    <div className="card-actions justify-between items-center ">
      <p className='text-white '>{item.preco}</p>
      <button onClick={fecharAba} className="btn btn-primary bg-purple-600 hover:bg-white hover:text-purple-600 text-white">Reservar</button>
    </div>
  </div>
</div>

<div className={`fixed top-0 right-0 h-full w-full lg:w-1/3 bg-[#1c1c22] text-white z-50 transform ${abaReserva ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
  <div className='mb-2 border-b-2 w-full  p-2 items-center'>
  <CgArrowLongLeft color='white' size={30} onClick={fecharAba}/></div>{usuario.token !== '' ? <Reserva  servico={item}   /> : <Login/>}
  
  </div>
   
    </>
  )
}

export default CardServico