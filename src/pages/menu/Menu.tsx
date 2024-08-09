import React, { useState } from 'react'
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'
import Config from '../config/Config'
import DadosConta from '../dadosConta/DadosConta'

function Profile() {

  const[menuConfig, setMenuConfig] = useState<boolean>(false)
  const[menuConta, setMenuConta] = useState<boolean>(false)

  function menuConfigAbrir(){
    setMenuConfig(!menuConfig)
  }

  function menuContaAbrir(){
    setMenuConta(!menuConta)
  }


  return (
    <>
    
  
      
    <div className='flex flex-col items-start  gap-4 border-black container mx-auto  w-full h-screen  bg-white shado'>
     
        <div className='border-b-2 p-4 w-full'>
        <button onClick={menuContaAbrir} className=' flex items-center gap-2 text-black'>
          Detalhes da conta<CgArrowLongRight color='black'/>
        </button>

        </div >
        <div className='border-b-2 p-4 w-full text-black'>
        <button className=' flex items-center gap-2 text-black'>
          Minhas reservas <CgArrowLongRight color='black'/>
        </button>

        </div>
        <div className='border-b-2 p-4 w-full'>

        <button onClick={menuConfigAbrir} className=' flex items-center gap-2 text-black'>
          Configurações <CgArrowLongRight color='black'/>
        </button>
        </div>
        <div className='border-b-2 p-4 w-full text-black'>
        <button>
          Sobre o Barber
        </button>

        </div>
        <div className='border-b-2 p-4 w-full text-black'>
        <button>
          Sair
        </button>

        </div>
      </div>

<div className={`fixed top-0 right-0 h-full w-full bg-white  text-white z-0 transform ${menuConfig ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
<div className='mb-2 border-b-2 w-full ml-2 p-2'>
<CgArrowLongLeft color='black' size={30} onClick={menuConfigAbrir}/></div><Config/></div>

<div className={`fixed top-0 right-0 h-full w-full bg-white  text-white z-0 transform ${menuConta ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
<div className='mb-2 border-b-2 w-full ml-2 p-2'>
<CgArrowLongLeft color='black' size={30} onClick={menuContaAbrir}/></div><DadosConta/></div>
   


     
</>
  )
}

export default Profile
