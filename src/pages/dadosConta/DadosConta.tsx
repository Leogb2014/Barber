import React, {  ChangeEvent, useContext, useState} from 'react'

import { AuthContext } from '../../context/AuthContext';
import Usuario from '../../models/Usuario';

function DadosConta() {

  const[abrir, setAbrir] = useState<boolean>(false)
  const[usuarioMandar, setUsuarioMandar] = useState<Usuario>({} as Usuario)

  function abrirInput(){
    setAbrir(!abrir)
  }
   
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioMandar({
      ...usuario,
      [e.target.name]: e.target.value,
     
    });

  }

  const{usuario} = useContext(AuthContext)

  return (
    <div className='flex flex-col '>
        <div className='flex flex-col items-start'>
        <h1 className='text-black text-2xl font-bold ml-4'>Detalhes da conta</h1>

        </div>
        <h2 className='text-black p-4 my-2 bg-gray-200'>Detalhes Pessoais</h2>
    
        <div className='text-black p-4 border-b-2 flex justify-between items-center'>
        <div>
        <p>Nome</p>
        {abrir === false ? <> <div className='flex justify-between'><div>{usuario.nome}</div> <div><button onClick={abrirInput} className='border-2 rounded-xl p-2 font-semibold'>
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
            <button className='border-2 rounded-xl p-2 font-semibold'>
            Salvar
        </button></>}
        
        </div>
        <div>
        

        </div>
    </div>

    <div className='text-black p-4 border-b-2 flex justify-between items-center'>
        <div>
        <p>E-mail</p>
        {usuario.email}
        </div>
        <div>
        <button className='border-2 rounded-xl p-2 font-semibold'>
            Editar
        </button>

        </div>
    </div>

    <div className='text-black p-4 flex justify-between'>
        <div >
        <p className=''>Número de telefone</p>
        <div>
        {usuario.telefone}

        </div>

        </div>
        <button className='border-2 rounded-xl p-2 font-semibold'>
            Editar
        </button>
    </div>
    
    </div>
  )
}

export default DadosConta