import React, { ChangeEvent, useEffect, useState } from 'react'
import { cadastrarUsuario } from '../../service/Service'
import Usuario from '../../models/Usuario';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

function CadastroUsuario() {

  const[confirmaSenha, setConfirmaSenha] = useState<string>("")
  const[Loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const[usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    foto: '',
    role: '',
    senha: '',
  })

  const[usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    foto: '',
    role: '',
    senha: '',
  })

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
     
    });

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }


  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault()
    try{
      await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuarioResposta)
      alert('usuario cadastrado')
    }catch(erro){
      alert('Erro ao cadastrar usuário')
    }
  }

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/home')
  }


    



  return (
    <div className='flex flex-col items-center  justify-center'>
        <h1 className='text-5xl p-7'>Cadastro</h1>
      
        <form onSubmit={cadastrarNovoUsuario}>
            <div className='flex gap-2 flex-col'>
            <label htmlFor="nome">Nome</label>
            <div>
            <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={usuario.nome}
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
                  value={usuario.email}
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
                value={usuario.telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                required
                className="border-2 border-slate-700 rounded w-96 p-2" />
            </div>
            <label htmlFor="foto">foto</label>
            <div>
            <input 
            type="text"
             name="foto" 
             id="foto" 
             placeholder=''
             value={usuario.foto}
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
            value={usuario.senha}
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
            <button className='border rounded-xl px-4 py-2 font-semibold hover:bg-white' type='submit'>
            {Loading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>Entrar</span>}
            </button>

             </div>

            
        </form>

        

       
    </div>
  )
}

export default CadastroUsuario