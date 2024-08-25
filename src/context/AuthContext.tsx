import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from '../models/UsuarioLogin';
import { login } from "../service/Service";


interface AuthContextProps{
    usuario: UsuarioLogin,
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps){

    const[usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        email: "",
        telefone: "",
        foto: "",
        senha: "",
        role: "",
        token: ""
    })

    const[isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin){
        setIsLoading(true)
        try{
            await login('/usuarios/logar', userLogin, setUsuario)
            alert('Usuário logado com sucesso')
            setIsLoading(false)
        }catch(error){
            alert('Erro ao logar')
            setIsLoading(false)
        }
    }

    function handleLogout(){
        setUsuario({
            id: 0,
            nome: "",
            email: "",
            telefone: "",
            foto: "",
            senha: "",
            role: "",
            token: ""
        })
       
    }

    return(
        <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>


    )
}