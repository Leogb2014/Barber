import React, { ChangeEvent, useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Barbearia from '../../models/Barbearia'
import { ArrowRightIcon } from '@mui/x-date-pickers'
import { cadastrar } from '../../service/Service'
import { useNavigate } from 'react-router-dom'

function CadastroBarbearia() {

    const{usuario} = useContext(AuthContext)
    const token = usuario.token

    const navigate = useNavigate()

    const[barbearia, setBarbearia] = useState<Barbearia>({
        id: 0,
        nome: '',
        endereco: '',
        foto: '',
        usuario: usuario
    })

    const[barbeariaResposta, setBarbeariaResposta] = useState<Barbearia>({
        id: 0,
        nome: '',
        endereco: '',
        foto: '',
        usuario: usuario
    })

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setBarbearia({
          ...barbearia,
          [e.target.name]: e.target.value,
         
        }
      );
     
      }

      async function cadastrarBarbearia(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        try{
            await cadastrar('/barbearias/cadastrar', barbearia, setBarbeariaResposta, {
                headers: {
                    'Authorization': token
                }
            } )
        }catch(error){
            alert('Erro ao cadastrar barbearia')
        }
        navigate('/HOME')
        

      }



  return (
    <div className='flex flex-col items-center  justify-center h-screen '>
        <h1>Informações do estabelecimento</h1>
    <form onSubmit={cadastrarBarbearia} >
    <label htmlFor="nome">Nome da barbearia</label>
            <div>
            <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={barbearia.nome}
                  required
                  placeholder='name'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  className="border-2 border-slate-700 rounded w-96 p-2" />
             
            </div>
           
        <label htmlFor="endereco">Endereço</label>
        <div>
        <input
            type="text"
            name="endereco"
            id="endereco"
            value={barbearia.endereco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required
            className="border-2 border-slate-700 rounded w-96 p-2" />
        </div>
        <label htmlFor="foto">Foto</label>
            <div>
            <input
                  type="foto"
                  name="foto"
                  id="foto"
                  value={barbearia.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  className="border-2 border-slate-700 rounded w-96 p-2" />
            </div>
        <div>
            <button type='submit'>
                Avançar <ArrowRightIcon/>
            </button>
        </div>
    </form>
    </div>
  )
}

export default CadastroBarbearia