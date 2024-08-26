import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import {  cadastrarUsuario } from '../../service/Service'
import { AuthContext } from '../../context/AuthContext'
import UsuarioLogin from '../../models/UsuarioLogin'

function CadastroUsuarioAdmin() {

    const[confirmaSenha, setConfirmaSenha] = useState<string>("")
    const{handleLogin} = useContext(AuthContext)

    const navigate = useNavigate()

    const[usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)
  
    const[usuarioBarber, setUsuarioBarber] = useState<Usuario>({
      id: 0,
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      foto: '',
      role: 'ADMIN',
      senha: '',
    })

  
    const[usuarioBarberResposta, setUsuarioBarberResposta] = useState<Usuario>({
      id: 0,
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      foto: '',
      role: 'ADMIN',
      senha: '',
    })

    
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setUsuarioBarber({
        ...usuarioBarber,
        [e.target.name]: e.target.value,
       
      }
    );
   
  
    }
  
    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
      setConfirmaSenha(e.target.value)
      setUsuarioLogin({
        id: 0,
        nome: '',
        email: usuarioBarber.email,
        telefone: '',
        endereco: '',
        foto: '',
        role: '',
        senha: usuarioBarber.senha,
        token: ''
      })

    }


  
  
    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>){
      e.preventDefault()
      try{
        await cadastrarUsuario("/usuarios/cadastrar", usuarioBarber, setUsuarioBarberResposta)
        alert('usuario cadastrado')
        logar()
        
      
        }catch(erro){
        alert('Erro ao cadastrar usuário')
      }
      navigate('/cadastroBarbearia')
    }

    function logar(){
      handleLogin(usuarioLogin)
    }

   

  return (
    <div className='flex flex-col items-center  justify-center'>
        <h1 className='text-5xl p-7'>Conta para empresa</h1>
      
        <form onSubmit={cadastrarNovoUsuario}>
            <div className='flex gap-2 flex-col'>
            <label htmlFor="nome">Nome</label>
            <div>
            <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={usuarioBarber.nome}
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
                  value={usuarioBarber.email}
                  placeholder='example@example.com'
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  className="border-2 border-slate-700 rounded w-96 p-2" />
            </div>
            <label htmlFor="telefone">Telefone</label>
            <div>
            <input
                type="text"
                name="telefone"
                id="telefone"
                placeholder='(xx) xxxxx-xxxx'
                value={usuarioBarber.telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                required
                className="border-2 border-slate-700 rounded w-96 p-2" />
            </div>
            
        <label htmlFor="preco">foto</label>
            <div>
            <input 
            type="text"
             name="foto" 
             id="foto" 
             placeholder=''
             value={usuarioBarber.foto}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
             className="border-2 border-slate-700 rounded w-96 p-2" />
            </div>
           
            <label htmlFor="senha">Senha</label>
            <div>
            <input 
            type="password" 
            name="senha" 
            id="senha" 
            placeholder='' 
            value={usuarioBarber.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required 
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

            </div>
             <div className='flex items-center justify-center p-6'>
            <button className='border rounded-xl px-4 py-2 font-semibold hover:bg-white' type='submit'>Cadastrar</button>

             </div>

            
        </form>

        

       
    </div>
  )
}

export default CadastroUsuarioAdmin