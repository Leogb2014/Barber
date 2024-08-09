import React from 'react'
import { FaApple, FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


function Config() {
  return (
    <div className='flex flex-col items-start  gap-4 border-black container mx-auto  w-full h-screen  bg-white'>
        <div className='border-b-2 p-4 w-full'>
          
        <div  className=' justify-between flex items-center gap-2 text-black'>
          Ativar notificações 
          <input type="checkbox" className="toggle toggle-info" defaultChecked />
        </div>

        </div >
        <div className='border-b-2 w-full flex justify-between '>

        <button  className='flex flex-col  items-start  text-black'>
            <div className='text-sm ml-4 text-gray-500'>
             Idioma
            </div>
           
          <h1 className='ml-4 mb-4'>Automático(português) </h1>
          
        </button>
       
     
        </div>
        <div className='border-b-2 w-full  text-black'>

        <button className='flex  flex-col items-start'>
            <div className='text-sm ml-4 text-gray-500'>
              País

            </div>
            <h1 className='ml-4 mb-4'>Brasil</h1>
        </button>

        </div>
        <div className='border-b-2 w-full  text-black'>

        <button className='flex  flex-col items-start'>
            <div className='text-sm ml-4 text-gray-500'>
              Facebook

            </div>
            <h1 className='ml-4 '>Não Conectado</h1>
            
        </button>
        <button className='ml-4 mb-2 border flex gap-2 items-center rounded-md p-1 text-sm bg-blue-600 text-white'><FaFacebookF/>Conecte-se com facebook</button>

        </div>
        <div className='border-b-2 w-full  text-black'>

        <button className='flex  flex-col items-start'>
            <div className='text-sm ml-4 text-gray-500'>
              Google

            </div>
            <h1 className='ml-4 '>Não Conectado</h1>
            
        </button>
        <button className='ml-4 mb-2 border flex gap-2 items-center p-1 rounded-md text-sm bg-gray-200 '><FcGoogle size={30} /><h1 className='text-black'>Continuar com Google</h1></button>

        </div>
        <div className='border-b-2 w-full  text-black'>

<button className='flex  flex-col items-start'>
    <div className='text-sm ml-4 text-gray-500'>
      Apple

    </div>
    <h1 className='ml-4 '>Não Conectado</h1>
    
</button>
<button className='ml-4 mb-2 border flex gap-2 items-center rounded-md p-1 text-sm  bg-black '><FaApple color='white' /><h1 className='text-white'>Conecte-se com a Apple</h1></button>

</div>
      </div>
  )
}

export default Config