import React, { useContext, useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import Menu from '../../pages/menu/Menu'
import { AuthContext } from '../../context/AuthContext'
import { CgArrowLongLeft } from 'react-icons/cg'


function Navbar() {

  
  const[menuOpen, setMenuOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const {usuario} = useContext(AuthContext)
  const token = usuario.token


  function abrir(){
    setMenuOpen(!menuOpen)
  }

  function abrirLogin(){
      setMenuOpen(!menuOpen)
      navigate('/login')
  
  }



  return (
    <div className=' w-full  bg-transparent absolute flex justify-between'>
        <Link to={'/'} className='text-white z-10 m-5 text-4xl font-bold'>Barber</Link>

      
        
        <div className='z-10 '>
          <IoMenu color='white' size={50} className='m-4 z-10 ' onClick={abrir}/>
        </div>
        
       

        <div className={`fixed top-0 right-0 z-10 h-full w-1/3 bg-[#1c1c22] text-white  transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className='mb-2 border-b-2 w-full ml-2 p-2'>
          <CgArrowLongLeft color='white' size={30} onClick={abrir}/></div><Menu onClick={abrirLogin}/></div>
   
        
        
    </div>
  )
}

export default Navbar