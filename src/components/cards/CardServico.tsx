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

<div  className='flex w-96 flex-col items-center rounded-xl border border-slate-700 shadow-2xl'>
      <div className='flex'>
    
        <div className='pt-4 flex flex-col gap-4 items-start'>
        <p className='font-bold text-white '>
            {item.nome}
        </p>
        
       

        <div className='text-white w-64 flex pr-4 pb-4 justify-between '>
        <p className='text-purple-500 font-semibold'> {item.preco}</p>
        <button onClick={fecharAba} className=' font-semibold  text-white px-2 text-sm border rounded-xl  hover:bg-white hover:text-black' >Reservar</button>

      </div>
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