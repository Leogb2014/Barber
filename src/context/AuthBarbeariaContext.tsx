import { createContext, ReactNode, useState } from "react";
import { login } from "../service/Service";
import BarbeariaLogin from "../models/BarbeariaLogin";
import Barbearia from "../models/Barbearia";

interface AuthBarbeariaContextProps{
    barbearia: BarbeariaLogin,
    handleBarberLogout(): void
    handleBarberLogin(barbearia: BarbeariaLogin): Promise<void>
    isBarberLoading: boolean
    barbeariaCadastro: Barbearia
}

interface AuthBarbeariaProviderProps{
    children: ReactNode
}

export const AuthBarbeariaContext = createContext({} as AuthBarbeariaContextProps)

export function AuthBarbeariaProvider({children}: AuthBarbeariaProviderProps){

    const[barbearia, setBarbearia] = useState<BarbeariaLogin>({
        id: 0,
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        foto: "",
        senha: "",
        servico: [],
        token: ""
    })

    const[barbeariaCadastro, setBarbeariaCadastro] = useState<Barbearia>({
        id: barbearia.id,
        nome: barbearia.nome,
        email: barbearia.email,
        telefone: barbearia.telefone,
        endereco: barbearia.endereco,
        foto: barbearia.foto,
        senha:barbearia.senha,
        
    })

    const[isBarberLoading, setIsBarberLoading] = useState(false)

    async function handleBarberLogin(userLogin: BarbeariaLogin){
        setIsBarberLoading(true)
        try{
            await login('/barbearias/logar', userLogin, setBarbearia)
            alert('Usuário logado com sucesso')
            setIsBarberLoading(false)
        }catch(error){
            alert('Erro ao logar')
            setIsBarberLoading(false)
        }
    }

    function handleBarberLogout(){
        setBarbearia({
            id: 0,
            nome: "",
            email: "",
            telefone: "",
            endereco: "",
            foto: "",
            senha: "",
            servico: [],
            token: ""
        })
       
    }

    return(
        <AuthBarbeariaContext.Provider value={{barbearia, barbeariaCadastro, handleBarberLogin, handleBarberLogout, isBarberLoading}}>
            {children}
        </AuthBarbeariaContext.Provider>


    )
}