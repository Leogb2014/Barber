import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import Menu from '../../pages/menu/Menu'



function Navbar() {

  
  const[menuOpen, setMenuOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  function abrir(){
    setMenuOpen(!menuOpen)
  }

  function abrirLogin(){
    setMenuOpen(!menuOpen)
    navigate('/login')

  }



  return (
    <div className=' w-full bg-black flex justify-between'>
        <Link to={'/'} className='text-white m-5 text-4xl font-bold'>Barber</Link>

      
        
        <div>
          <IoMenu color='white' size={50} className='m-4' onClick={abrir}/>
        </div>
        
        <div className={`fixed top-20 right-0 h-full  w-1/3 bg-[#1c1c22] text-white z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out`}><Menu onClick={abrirLogin}/></div>

     
   
        
        
    </div>
  )
}

export default Navbar