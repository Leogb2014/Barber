import React, { ChangeEvent, useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Barbearia from '../../models/Barbearia'
import { ArrowRightIcon } from '@mui/x-date-pickers'
import { cadastrar } from '../../service/Service'
import { useNavigate } from 'react-router-dom'

function CadastroBarbearia() {

    const{usuario} = useContext(AuthContext)
    const token = usuario.token

    const[confirmaSenha, setConfirmaSenha] = useState<string>("")

    const navigate = useNavigate()

    const[barbearia, setBarbearia] = useState<Barbearia>({
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        senha: '',
        foto: '',
        
    })

    const[barbeariaResposta, setBarbeariaResposta] = useState<Barbearia>({
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        senha: '',
        foto: '',
        
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
        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8){
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
            
    
          }else {

            alert('Dados inconsistentes. Verifique as informações de cadastro.')
      
            setBarbearia({ ...barbearia, senha: "" }) // Reinicia o campo de Senha
      
            setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
      
          }

        }

      
  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
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
            <label htmlFor="email">Email</label>
            <div>
            <input
                  type="email"
                  name="email"
                  id="email"
                  value={barbearia.email}
                  required
                  placeholder='email@email.com'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  className="border-2 border-slate-700 rounded w-96 p-2" />
             
            </div>
            <label htmlFor="telefone">Telefone</label>
            <div>
            <input
                  type="text"
                  name="telefone"
                  id="telefone"
                  value={barbearia.telefone}
                  required
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
            <label htmlFor="senha">Senha</label>
            <div>
            <input
                  type="password"
                  name="senha"
                  id="senha"
                  value={barbearia.senha}
                  required
                 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  className="border-2 border-slate-700 rounded w-96 p-2" />
             
            </div>
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <div>
            <input 
            type="password" 
            name="confirmarSenha" 
            id="confirmarSenha" 
            placeholder='' 
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            required 
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