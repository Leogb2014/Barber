import React, {  ChangeEvent, useContext, useState} from 'react'

import { AuthContext } from '../../context/AuthContext';
import Usuario from '../../models/Usuario';

function DadosConta() {

  const[abrirNome, setAbrirNome] = useState<boolean>(false)
  const[abrirEmail, setAbrirEmail] = useState<boolean>(false)
  const[abrirTelefone, setAbrirTelefone] = useState<boolean>(false)
  const[usuarioMandar, setUsuarioMandar] = useState<Usuario>({} as Usuario)


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
    setUsuarioMandar({
      ...usuario,
      [e.target.name]: e.target.value,
     
    });

  }

  const{usuario} = useContext(AuthContext)

  return (
    <div className='flex flex-col container mx-auto h-screen px-4 lg:px-36 justify-center '>
        <div className='flex flex-col items-start'>
        <h1 className='text-white text-2xl font-bold ml-4'>Detalhes da conta</h1>

        </div>
        <h2 className='text-black p-4 my-2 bg-gray-200'>Detalhes Pessoais</h2>
    
        
        <div className='border-b p-4'>
        <p>Nome</p>
        <div className='  '><div className='flex justify-between items-center ' >    {abrirNome === false ? <><div className='text-white'>{usuario.nome}</div> <div className='flex  font-semibold text-white'> <div><button onClick={abrirInputNome} className='border-2 rounded-xl p-2 font-semibold'>
            Editar
        </button></div> </div> </> : <> <div>
            <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={usuarioMandar.nome}
                  required
                  placeholder='name'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  className="border-2 border-slate-700 rounded w-96 p-2" />
             
            </div> 
            <button onClick={abrirInputNome} className='border-2 rounded-xl p-2 font-semibold text-white'>
            Salvar
        </button></>}</div></div>
        
    
        
        </div>

        <div className='border-b p-4'>
        <p>E-mail</p>
        <div className='  '><div className='flex justify-between items-center ' >    {abrirEmail === false ? <><div className='text-white'>{usuario.email}</div> <div className='flex  font-semibold text-white'> <div><button onClick={abrirInputEmail} className='border-2 rounded-xl p-2 font-semibold'>
            Editar
        </button></div> </div> </> : <> <div>
            <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={usuarioMandar.nome}
                  required
                  placeholder='name'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  className="border-2 border-slate-700 rounded w-96 p-2" />
             
            </div> 
            <button onClick={abrirInputEmail} className='border-2 rounded-xl p-2 font-semibold text-white'>
            Salvar
        </button></>}</div></div>
        
    
        
        </div>

        <div className='border-b p-4'>
        <p>Número de telefone</p>
        <div className='  '><div className='flex justify-between items-center ' >    {abrirTelefone === false ? <><div className='text-white'>{usuario.telefone}</div> <div className='flex  font-semibold text-white'> <div><button onClick={abrirInputTelefone} className='border-2 rounded-xl p-2 font-semibold'>
            Editar
        </button></div> </div> </> : <> <div>
            <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={usuarioMandar.nome}
                  required
                  placeholder='name'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  className="border-2 border-slate-700 rounded w-96 p-2" />
             
            </div> 
            <button onClick={abrirInputTelefone} className='border-2 rounded-xl p-2 font-semibold text-white'>
            Salvar
        </button></>}</div></div>
        
    
        
        </div>
       
 

    
    
    
    </div>
  )
}

export default DadosConta