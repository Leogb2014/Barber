import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Profile from '../../pages/menu/Menu'
import Menu from '../../pages/menu/Menu'



function Navbar() {

  const[menuOpen, setMenuOpen] = useState<boolean>(false)

  function abrir(){
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='bg-black flex justify-between'>
        <Link to={'/'} className='text-white m-5 text-4xl font-bold'>Barber</Link>
        
        <div>
          <IoMenu color='white' size={50} className='m-4' onClick={abrir}/>
        </div>
        
        <div className={`fixed top-20 right-0 h-full w-full bg-white  text-white z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}><Menu/></div>

     
   
    
        
        
    </div>
  )
}

export default Navbar