import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebook } from 'react-icons/fa'

function Footer() {

    const data = new Date().getFullYear()

  return (
    <div className="flex justify-center border-t text-white">
      <div className="container flex flex-col items-center py-4">
        <p className='text-lg font-bold'>Barber company | Copyright: {data} </p>
        <p className=''>Acesse nossas redes sociais</p>
        <div className='flex gap-2'>
          <CiLinkedin size={40}  />
          <BsInstagram size={40}  />
          <FaFacebook size={40}  />
        </div>
      </div>
    </div>
  )
}

export default Footer