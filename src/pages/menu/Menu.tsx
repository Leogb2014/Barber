import React, { useCallback, useContext, useState } from 'react'
import { CgArrowLongLeft, CgArrowLongRight, CgProfile } from 'react-icons/cg'
import Config from '../config/Config'
import DadosConta from '../dadosConta/DadosConta'
import Sobre from '../sobre/Sobre'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import MinhasReservas from '../minhasReservas/MinhasReservas'

interface filhoProps{
  onClick: () => void
}

function Menu({onClick}: filhoProps) {

  const[menuConfig, setMenuConfig] = useState<boolean>(false)
  const[menuConta, setMenuConta] = useState<boolean>(false)
  const[menuSobre, setMenuSobre] = useState<boolean>(false)
  const[menuMinhasReservas, setMenuMinhasReservas] = useState<boolean>(false)

  const navigate = useNavigate()


  const{usuario, handleLogout} = useContext(AuthContext)

  function menuConfigAbrir(){
    setMenuConfig(!menuConfig)
  }
  function menuMinhasReservasAbrir(){
    setMenuMinhasReservas(!menuMinhasReservas)
  }

  function menuContaAbrir(){
    setMenuConta(!menuConta)
  }

  function menuSobreAbrir(){
    setMenuSobre(!menuSobre)
  }

  function ir(){
    navigate('/login')
  }

  function logout(){
    handleLogout()
  }

  let menuComponent

  if(usuario.token !== '') {
    menuComponent = (<div className='flex flex-col items-start  gap-4 border-black container mx-auto  w-full h-screen  bg-white shado'>
        <div className='border-b-2 p-4 w-full'>

  <div className=' flex items-center gap-2 text-black'>
  <CgProfile size={40}/> 
  <p className='font-bold text-2xl'>{usuario.nome}</p>
  </div>
  </div>
    <div className='border-b-2 p-4 w-full'>
    <button onClick={menuContaAbrir} className=' flex items-center gap-2 text-black'>
      Detalhes da conta<CgArrowLongRight color='black'/>
    </button>

    </div >
    <div className='border-b-2 p-4 w-full text-black'>
    <button onClick={menuMinhasReservasAbrir} className=' flex items-center gap-2 text-black'>
      Minhas reservas <CgArrowLongRight color='black'/>
    </button>

    </div>
    <div className='border-b-2 p-4 w-full'>

    <button onClick={menuConfigAbrir} className=' flex items-center gap-2 text-black'>
      Configurações <CgArrowLongRight color='black'/>
    </button>
    </div>
    <div className='border-b-2 p-4 w-full '>
    <button onClick={menuSobreAbrir} className=' flex items-center gap-2 text-black'>
      Sobre o Barber <CgArrowLongRight color='black'/>
    </button>

    </div>
    <div className='border-b-2 p-4 w-full text-black'>
    <button onClick={logout}>
      Sair
    </button>

    </div>
  </div>)

  }else{
   menuComponent = ( <div className='flex flex-col items-start  gap-4 border-black container mx-auto  w-full h-screen  bg-white shado'>
            <div className='border-b-2 p-4 w-full'>

        <div className=' flex items-center gap-2 text-black'>
          <CgProfile size={40}/> 
          <button onClick={onClick} className='border rounded-xl px-3 py-1 bg-blue-700 text-white'>Logar</button>
        </div>
        </div>
        
        <div className='border-b-2 p-4 w-full'>

        <button onClick={menuConfigAbrir} className=' flex items-center gap-2 text-black'>
          Configurações <CgArrowLongRight color='black'/>
        </button>
        </div>
        <div className='border-b-2 p-4 w-full '>
        <button onClick={menuSobreAbrir} className=' flex items-center gap-2 text-black'>
          Sobre o Barber <CgArrowLongRight color='black'/>
        </button>

        </div>
       
      </div>)
  }

  return (
    <>
    {menuComponent}
    
  
      
    

<div className={`fixed top-0 right-0 h-full w-full bg-white  text-white z-0 transform ${menuConfig ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
<div className='mb-2 border-b-2 w-full ml-2 p-2'>
<CgArrowLongLeft color='black' size={30} onClick={menuConfigAbrir}/></div><Config/></div>

<div className={`fixed top-0 right-0 h-full w-full bg-white  text-white z-0 transform ${menuConta ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
<div className='mb-2 border-b-2 w-full ml-2 p-2'>
<CgArrowLongLeft color='black' size={30} onClick={menuContaAbrir}/></div><DadosConta/></div>

<div className={`fixed top-0 right-0 h-full w-full bg-white  text-white z-0 transform ${menuSobre ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
<div className='mb-2 border-b-2 w-full ml-2 p-2'>
<CgArrowLongLeft color='black' size={30} onClick={menuSobreAbrir}/></div><Sobre/></div>


<div className={`fixed top-0 right-0 h-full w-full bg-[#1c1c22]  text-black z-0 transform ${menuMinhasReservas ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
<div className='mb-2 border-b-2 w-full ml-2 p-2'>
<CgArrowLongLeft color='white' size={30} onClick={menuMinhasReservasAbrir}/></div><MinhasReservas/></div>
   


     
</>
  )
}

export default Menu
