import React, { ChangeEvent, useContext, useState } from 'react'
import { AuthBarbeariaContext } from '../../context/AuthBarbeariaContext'
import Barbearia from '../../models/Barbearia'

function DadosBarbearia() {

    const{barbearia} = useContext(AuthBarbeariaContext)

    const[abrirNome, setAbrirNome] = useState<boolean>(false)
    const[abrirEmail, setAbrirEmail] = useState<boolean>(false)
    const[abrirTelefone, setAbrirTelefone] = useState<boolean>(false)
    const[barbeariaMandar, setBarbeariaMandar] = useState<Barbearia>({} as Barbearia)
  
    function abrirInputNome(){
      setAbrirNome(!abrirNome)
    }
  
    function abrirInputEmail(){
      setAbrirEmail(!abrirEmail)
    }
  
    function abrirInputTelefone(){
      setAbrirTelefone(!abrirTelefone)
    }
     
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setBarbeariaMandar({
        ...barbearia,
        [e.target.name]: e.target.value,
       
      });
    }


  return (
    <div className='container mx-auto flex items-center '>
    <div>
    <img src={barbearia.foto} alt="" className='w-48 h- rounded-full' />
    </div>
    <div className='flex flex-col container mx-auto h-screen px-4 lg:px-36 justify-center '>
    <div className='flex flex-col items-start'>
    <h1 className='text-white text-2xl font-bold ml-4'>Detalhes da conta</h1>
    </div>
    <h2 className='text-black p-4 my-2 bg-gray-200'>Detalhes Pessoais</h2>

    <div className='border-b p-4'>
    <p>Nome</p>
    <div className='  '><div className='flex justify-between items-center ' >  {abrirNome === false ? <><div className='text-white'>{barbearia.nome}</div> <div className='flex  font-semibold text-white'> <div><button onClick={abrirInputNome} className='border-2 rounded-xl p-2 font-semibold'>
        Editar
    </button></div> </div> </> : <> <div>
        <input
              type="text"
              name="nome"
              id="nome"
              value={barbeariaMandar.nome}
              required
              placeholder='nome'
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="border-2 border-slate-700 rounded w-96 p-2" />
         
        </div> 
        <button onClick={abrirInputNome} className='border-2 rounded-xl p-2 font-semibold text-white'>
        Salvar
    </button></>}</div></div>
    

    
    </div>

    <div className='border-b p-4'>
    <p>E-mail</p>
    <div className='  '><div className='flex justify-between items-center ' >    {abrirEmail === false ? <><div className='text-white'>{barbearia.email}</div> <div className='flex  font-semibold text-white'> <div><button onClick={abrirInputEmail} className='border-2 rounded-xl p-2 font-semibold'>
        Editar
    </button></div> </div> </> : <> <div>
        <input
              type="text"
              name="nome"
              id="nome"
              value={barbeariaMandar.nome}
              required
              placeholder='Example@example.com'
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="border-2 border-slate-700 rounded w-96 p-2" />
         
        </div> 
        <button onClick={abrirInputEmail} className='border-2 rounded-xl p-2 font-semibold text-white'>
        Salvar
    </button></>}</div></div>
    

    
    </div>

    <div className='border-b p-4'>
    <p>Número de telefone</p>
    <div className='  '><div className='flex justify-between items-center ' >    {abrirTelefone === false ? <><div className='text-white'>{barbearia.telefone}</div> <div className='flex  font-semibold text-white'> <div><button onClick={abrirInputTelefone} className='border-2 rounded-xl p-2 font-semibold'>
        Editar
    </button></div> </div> </> : <> <div>
        <input
              type="text"
              name="nome"
              id="nome"
              value={barbeariaMandar.nome}
              required
              placeholder='(xx)xxxxx-xxxx'
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="border-2 border-slate-700 rounded w-96 p-2" />
         
        </div> 
        <button onClick={abrirInputTelefone} className='border-2 rounded-xl p-2 font-semibold text-white'>
        Salvar
    </button></>}</div></div>
    

    
    </div>
   





</div>
</div>
  )
}

export default DadosBarbearia