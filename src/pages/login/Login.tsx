import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import UsuarioLogin from '../../models/UsuarioLogin'
import { AuthContext } from '../../context/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const[usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)

    const navigate = useNavigate()

    const{usuario, handleLogin, isLoading} = useContext(AuthContext)

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
          ...usuarioLogin,
          [e.target.name]: e.target.value,
         
        });
    
      }

      useEffect(() => {
        if (usuario.token !== "" ) {
            navigate('/Home')
        }

    }, [usuario])

      function login(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        handleLogin(usuarioLogin)
      }


  return (
    <div className='flex flex-col items-center p-28 justify-center'>
        <h1 className='text-4xl'>Login</h1>
    <form onSubmit={login}>
            <div className='flex flex-col gap-2 '>
            <label htmlFor="email">Email</label>
            <div>
            <input
                  type="email"
                  name="email"
                  id="email"
                  value={usuarioLogin.email}
                  placeholder='example@example.com'
                  required
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
            value={usuarioLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required 
            
            className="border-2 border-slate-700 rounded w-96 p-2" />
            </div>

            </div>
            <div className='flex items-center justify-center p-6'>
                
            <button  type='submit' className="border rounded-xl px-4 py-2 font-semibold hover:bg-white">
           {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>Entrar</span>}
          </button>
            </div>

            <p>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-purple-400 hover:underline font-bold">
              Cadastre-se
            </Link>
          </p>


            
        </form>
        </div>
  )
}

export default Login